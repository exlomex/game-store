import {rtkApi} from "@/api/RtkApi";
import {USER_ACCESS_TOKEN_KEY} from "@/const/localStorage";

export interface reviewBody {
    "rating": number;
    "description": string,
    "goodId": number
}

const AddReview = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        addNewReview: build.mutation<null, reviewBody>({
            query: (body) => ({
                url: '/reviews',
                method: 'POST',
                body,
                headers: {
                    Auth: `Bearer ${localStorage.getItem(USER_ACCESS_TOKEN_KEY) || ''}`
                }
            }),
            invalidatesTags: ['Review'],
        }),
    }),
});

export const useAddNewReview = AddReview.useAddNewReviewMutation
