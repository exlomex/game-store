import { rtkApi } from '@/api/RtkApi'

interface PromoType {

}

const extendedApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        fetchPromocodes: build.query<PromoType[], {id: number}>({
            query: ({id}) => ({
                url: `/`,
            }),
            providesTags: []
        }),

    }),
})

export const useFetchGoodReviewsById = extendedApi.useFetchPromocodesQuery
