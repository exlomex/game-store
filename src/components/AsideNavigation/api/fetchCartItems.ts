import { rtkApi } from '@/api/RtkApi'
import {GoodType} from "@/types/goodsTypes";

export interface cartItem {
    id: number;
    quantity: number;
    good: GoodType;
    userId: number;
}

const extendedApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        fetchCartItems: build.query<cartItem[], null>({
            query: () => ({
                url: `/cart`
            }),
            providesTags: ['Cart']
        }),

    }),
})

export const useFetchCartItems = extendedApi.useFetchCartItemsQuery
export const useLazyFetchCartItems = extendedApi.useLazyFetchCartItemsQuery
