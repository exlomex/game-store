import {rtkApi} from "@/api/RtkApi";
import {GoodType} from "@/types/goodsTypes";

interface orderItemsInteraface {
    id: number
    quantity: number
    good: GoodType;
}
export interface OrderInterface {
    id: number;
    userId: number;
    amount: number;
    orderItems: orderItemsInteraface[]
    dateCreated: string;
}

const createOrderApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        createNewOrder: build.mutation<OrderInterface, {ids: number[]}>({
            query: (body) => ({
                url: '/orders',
                method: 'POST',
                body: body,
            }),
            invalidatesTags: ['Orders'],
        }),
    }),
});

export const useCreateNewOrder = createOrderApi.useCreateNewOrderMutation
