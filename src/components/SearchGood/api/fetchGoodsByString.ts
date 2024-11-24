import { rtkApi } from '@/api/RtkApi'
import {GoodType} from "@/types/goodsTypes";

const extendedApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        fetchGoodsByString: build.query<GoodType[], {string: string}>({
            query: ({string}) => ({
                url: `/goods/search?title=${string}`,
            }),
        }),

    }),
})

export const LazyFetchGoodsByString = extendedApi.useLazyFetchGoodsByStringQuery
export const FetchGoodsByString = extendedApi.useFetchGoodsByStringQuery
