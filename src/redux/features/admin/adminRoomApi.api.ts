import { baseApi } from "@/redux/api/baseApi";
import { TQueryParam } from "@/types";

const adminRoomApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    adminGetAllRoom: builder.query({
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
      providesTags: ["adminGetAllRoom"],
    }),
    activateRoom: builder.mutation({
      query: (id: string) => ({
        url: `/rooms/activate/${id}`,
        method: "PATCH",
      }),
      invalidatesTags: [
        "adminGetAllRoom",
        "adminGetAllApprovedRoom",
        "getAllRooms",
      ],
    }),
    adminGetAllApprovedRoom: builder.query({
      query: (args) => {
        const params = new URLSearchParams();

        if (args) {
          args.forEach((item: TQueryParam) => {
            params.append(item.name, item.value as string);
          });
        }
        return {
          url: "/rooms/checking/activated",
          method: "GET",
          params: params,
        };
      },
      providesTags: ["adminGetAllApprovedRoom"],
    }),
    deActivateRoom: builder.mutation({
      query: (id: string) => ({
        url: `/rooms/deactivate/${id}`,
        method: "PATCH",
      }),
      invalidatesTags: [
        "adminGetAllApprovedRoom",
        "adminGetAllRoom",
        "getAllRooms",
      ],
    }),
    declinedRoom: builder.mutation({
      query: (id: string) => ({
        url: `/rooms/declined/${id}`,
        method: "PATCH",
      }),
      invalidatesTags: [
        "adminGetAllApprovedRoom",
        "adminGetAllRoom",
        "getAllRooms",
      ],
    }),

  }),
});

export const {
  useAdminGetAllRoomQuery,
  useActivateRoomMutation,
  useAdminGetAllApprovedRoomQuery,
  useDeActivateRoomMutation,
  useDeclinedRoomMutation,
} = adminRoomApi;
