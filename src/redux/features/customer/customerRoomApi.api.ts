import { baseApi } from "@/redux/api/baseApi";
import { TQueryParam } from "@/types";

const roomApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllRooms: builder.query({
      query: () => ({
        url: "/rooms",
        method: "GET",
      }),
      providesTags: ["getAllRooms"],
    }),
    getSingleRoom: builder.query({
      query: (id) => ({
        url: `/rooms/${id}`,
        method: "GET",
      }),
      providesTags: ["getSingleRoom"],
    }),
    signlePartnerRequest: builder.query({
      query: () => ({
        url: `/partners/requested/`,
        method: "GET",
      }),
    }),
    requestedPartner: builder.mutation({
      query: (partnerData: any) => ({
        url: `/partners/requested`,
        method: "POST",
        body: partnerData,
      }),
    }),
    makeRoomFavourite: builder.mutation({
      query: (data: any) => ({
        url: `/favourite/me`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["getAllFavourite", "getSingleRoom"],
    }),
    makeRoomUnFavourite: builder.mutation({
      query: (data: any) => ({
        url: `/favourite/unfav`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["getAllFavourite", "getSingleRoom"],
    }),
    getAllFavourite: builder.query({
      query: (args) => {
        const params = new URLSearchParams();

        if (args) {
          args.forEach((item: TQueryParam) => {
            params.append(item.name, item.value as string);
          });
        }
        return {
          url: "/favourite/me",
          method: "GET",
          params: params,
        };
      },
      providesTags: ["getAllFavourite"],
    }),
  }),
});

export const {
  useGetAllRoomsQuery,
  useGetSingleRoomQuery,
  useSignlePartnerRequestQuery,
  useRequestedPartnerMutation,
  useMakeRoomFavouriteMutation,
  useMakeRoomUnFavouriteMutation,
  useGetAllFavouriteQuery,
} = roomApi;
