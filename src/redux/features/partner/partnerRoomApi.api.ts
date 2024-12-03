import { baseApi } from "@/redux/api/baseApi";

const partnerRoomApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        requestedToCreateRoom: builder.mutation({
            query: (roomData) => ({
                url: '/rooms',
                method: 'POST',
                body: roomData,
            })
        }),
       
    })
})

export const {useRequestedToCreateRoomMutation} = partnerRoomApi;