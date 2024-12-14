import { baseApi } from "@/redux/api/baseApi";

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
    }),
    makeRoomUnFavourite: builder.mutation({
      query: (data: any) => ({
        url: `/favourite/unfav`,
        method: "POST",
        body: data,
      }),
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
} = roomApi;
