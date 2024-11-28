import { rtkApi } from '@/api/RtkApi'
import {GoodType} from "@/types/goodsTypes";

const extendedApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        fetchGoodById: build.query<GoodType, {id: number}>({
            query: ({id}) => ({
                url: `/goods/${id}`,
            }),
        }),

    }),
})

export const useFetchGoodById = extendedApi.useFetchGoodByIdQuery
