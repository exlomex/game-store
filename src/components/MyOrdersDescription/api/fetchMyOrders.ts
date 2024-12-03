import { rtkApi } from '@/api/RtkApi'
import {OrderInterface} from "@/components/CartDescription/api/createOrderApi";

const extendedApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        fetchMyOrders: build.query<OrderInterface[], null>({
            query: () => ({
                url: `/orders`,
            }),
            providesTags: ['Orders']
        }),

    }),
})

export const useFetchMyOrders = extendedApi.useFetchMyOrdersQuery
