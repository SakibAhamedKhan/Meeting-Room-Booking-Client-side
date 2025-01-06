import { baseApi } from "@/redux/api/baseApi";
import { TQueryParam } from "@/types";

const partnerRoomApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    requestedToCreateRoom: builder.mutation({
      query: (roomData) => ({
        url: "/rooms",
        method: "POST",
        body: roomData,
      }),
    }),
    parnterGetAllRoom: builder.query({
      query: (args) => {
        const params = new URLSearchParams();

        if (args) {
          args.forEach((item: TQueryParam) => {
            params.append(item.name, item.value as string);
          });
        }
        return {
          url: "/rooms/checking/operations",
          method: "GET",
          params: params,
        };
      },
      providesTags: ["partnerGetAllRoom"],
    }),
    publishRoom: builder.mutation({
      query: (id: string) => ({
        url: `/rooms/publish/${id}`,
        method: "PATCH",
      }),
      invalidatesTags: ["partnerGetAllRoom"],
    }),
    unPublishRoom: builder.mutation({
      query: (id: string) => ({
        url: `/rooms/unpublish/${id}`,
        method: "PATCH",
      }),
      invalidatesTags: ["partnerGetAllRoom"],
    }),
    addSlot: builder.mutation({
      query: (payload: any) => ({
        url: `/slots`,
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["partnerGetAllRoom"],
    }),
    getAllMySLot: builder.query({
      query: (payload: any) => {
        return {
          url: `/slots/getAllSlot/${payload}`,
          method: "GET",
        };
      },
    }),
    getAllPartnerBooking: builder.query({
      query: (args) => {
        const params = new URLSearchParams();
        if (args) {
          args.forEach((item: TQueryParam) => {
            params.append(item.name, item.value as string);
          });
        }
        return {
          url: "/bookings/partner",
          method: "GET",
          params: params,
        };
      },
      providesTags: ["getAllPartnerBooking"],
    }),
  }),
});

export const {
  useRequestedToCreateRoomMutation,
  useParnterGetAllRoomQuery,
  usePublishRoomMutation,
  useUnPublishRoomMutation,
  useAddSlotMutation,
  useGetAllMySLotQuery,
  useGetAllPartnerBookingQuery
} = partnerRoomApi;
