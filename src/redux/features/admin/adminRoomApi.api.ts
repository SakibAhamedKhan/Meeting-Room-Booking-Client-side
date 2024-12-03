import { baseApi } from "@/redux/api/baseApi";

const adminRoomApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        adminGetAllRoom: builder.query({
            query: () => ({
                url: '/rooms/checking/operations',
                method: 'GET', 
            })
        }),
        // getSingleRoom: builder.query({
        //     query: (id) => ({
        //         url: `/rooms/${id}`,
        //         method: 'GET', 
        //     })
        // }),
    })
})

export const {useAdminGetAllRoomQuery} = adminRoomApi;