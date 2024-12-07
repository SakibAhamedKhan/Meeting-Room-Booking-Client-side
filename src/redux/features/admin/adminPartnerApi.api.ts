import { baseApi } from "@/redux/api/baseApi";
import { TQueryParam } from "@/types";

const adminPartnerApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllPartners: builder.query({
      query: (args) => {
        const params = new URLSearchParams();

        if (args) {
          args.forEach((item: TQueryParam) => {
            params.append(item.name, item.value as string);
          });
        }
        return {
          url: "/partners",
          method: "GET",
          params: params,
        };
      },
      providesTags: ["getAllPartners"],
    }),
  }),
});

export const {
  useGetAllPartnersQuery,
} = adminPartnerApi;
