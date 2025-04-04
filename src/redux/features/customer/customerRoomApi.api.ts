import { baseApi } from "@/redux/api/baseApi";
import { TQueryParam } from "@/types";

const roomApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllRooms: builder.query({
      query: (args) => {
        const params = new URLSearchParams();

        if (args) {
          args.forEach((item: TQueryParam) => {
            params.append(item.name, item.value as string);
          });
        }

        return {
          url: "/rooms",
          method: "GET",
          params: params,
        }
      },
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
    getAllAvailableSlots: builder.mutation({
      query: (data: { id: string; date: any }) => ({
        url: "/slots/availability",
        method: "POST",
        body: data,
      }),
    }),
    bookingSlots: builder.mutation({
      query: (data: any) => ({
        url: "/bookings",
        method: "POST",
        body: data,
      }),
    }),
    getCustomerAllBooking: builder.query({
      query: (args) => {
        const params = new URLSearchParams();

        if (args) {
          args.forEach((item: TQueryParam) => {
            params.append(item.name, item.value as string);
          });
        }
        return {
          url: `/bookings/customer`,
          method: "GET",
          params: params,
        };
      },
      providesTags: ["getCustomerAllBooking"],
    }),
    giveCustomerBookingPaid: builder.mutation({
      query: (bookingId: string) => ({
        url: `/bookings/customer/paid/${bookingId}`,
        method: "PATCH",
      }),
      invalidatesTags: ["getCustomerAllBooking"],
    }),
    giveCustomerBookingCancel: builder.mutation({
      query: (bookingId: string) => ({
        url: `/bookings/customer/cancel/${bookingId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["getCustomerAllBooking"],
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
  useGetAllAvailableSlotsMutation,
  useBookingSlotsMutation,
  useGetCustomerAllBookingQuery,
  useGiveCustomerBookingPaidMutation,
  useGiveCustomerBookingCancelMutation,
} = roomApi;
