import { rtkApi } from '@/api/RtkApi'
import {GoodType, ReviewType} from "@/types/goodsTypes";

const extendedApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        fetchGoodReviewsById: build.query<ReviewType[], {id: number}>({
            query: ({id}) => ({
                url: `/reviews/good/${id}`,
            }),
            providesTags: ['Review']
        }),

    }),
})

export const useFetchGoodReviewsById = extendedApi.useFetchGoodReviewsByIdQuery
