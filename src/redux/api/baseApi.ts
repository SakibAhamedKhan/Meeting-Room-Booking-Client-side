import {
  BaseQueryApi,
  BaseQueryFn,
  createApi,
  DefinitionType,
  FetchArgs,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";
import { logout, setUser } from "../features/auth/authSlice.slice";


// https://meeting-room-booking-server-side-node.vercel.app/api/

const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:5000/api/",
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.token;
    console.log("17 Number: ", token);

    if (token) {
      headers.set("authorization", `${token}`);
    }

    return headers;
  },
});

const baseQueryWithRefreshToken: BaseQueryFn<
  FetchArgs,
  BaseQueryApi,
  DefinitionType
> = async (args, api, extraOptions): Promise<any> => {
  let result = await baseQuery(args, api, extraOptions);
  console.log("BaseApi 33 line: ", result);
  if (result.error?.status === 404) {
    // toast.error(result.error.data.message, { duration: 2000 });
    console.log(result);
  }
  if (result.error?.status === 401) {
    console.log("Sending refresh token");
    const res = await fetch("https://meeting-room-booking-server-side-node.vercel.app/api/v1/auth/refresh-token", {
      method: "GET",
      credentials: "include",
    });
    const data = await res.json();
    console.log(data);
    if (data?.data?.accessToken) {
      const user = (api.getState() as RootState).auth.user;
      api.dispatch(setUser({ user, token: data.data.accessToken }));
      result = await baseQuery(args, api, extraOptions);
    } else {
      api.dispatch(logout());
    }
  }
  return result;
};

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: baseQueryWithRefreshToken,
  tagTypes: [
    "adminGetAllRoom",
    "adminGetAllApprovedRoom",
    "getAllRooms",
    "getAllPartners",


    "getAllFavourite",
    "getSingleRoom",
    "getCustomerAllBooking",
    
    
    "partnerGetAllRoom",
    "getAllPartnerBooking",
    "getPartnerBookingLinechartData",
    
  ],
  endpoints: () => ({}),
});
