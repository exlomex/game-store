import { rtkApi } from '@/api/RtkApi'

export interface PromoType {
    "id": number,
    "name": string,
    "userId": number,
    "discount": number,
    "active": boolean
}

const extendedApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        fetchPromocodes: build.query<PromoType[], null>({
            query: () => ({
                url: `/promocodes`,
            }),
            providesTags: []
        }),

    }),
})

export const useFetchPromocodes = extendedApi.useFetchPromocodesQuery
