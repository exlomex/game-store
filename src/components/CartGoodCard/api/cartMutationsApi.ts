import {rtkApi} from "@/api/RtkApi";

const cartMutationsApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        increaseGoodQuantity: build.mutation<null, {id: number}>({
            query: ({id}) => ({
                url: `/cart/increase/${id}`,
                method: 'PATCH',
            }),
            invalidatesTags: ['Cart'],
        }),
        decreaseGoodQuantity: build.mutation<null, {id: number}>({
            query: ({id}) => ({
                url: `/cart/decrease/${id}`,
                method: 'PATCH',
            }),
            invalidatesTags: ['Cart'],
        }),
    }),
});

export const useIncreaseGoodQuantity = cartMutationsApi.useIncreaseGoodQuantityMutation
export const useDecreaseGoodQuantity = cartMutationsApi.useDecreaseGoodQuantityMutation
