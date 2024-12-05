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
      invalidatesTags: ["adminGetAllRoom"],
    }),
  }),
});

export const { useAdminGetAllRoomQuery, useActivateRoomMutation } =
  adminRoomApi;
