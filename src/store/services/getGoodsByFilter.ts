import { createAsyncThunk } from '@reduxjs/toolkit';
import {ThunkConfig} from "@/store/config/StateSchema";
import {AllConsoles, AllGenres, AllRatings} from "@/store/reducers/FilterSliceSchema";
import {GoodType} from "@/types/goodsTypes";
import {FilterSliceActions} from "@/store/reducers/FilterSlice";

export interface getGoodsByFilterProps {
    genre: AllGenres;
    rating: AllRatings;
    console: AllConsoles;
}

export const getGoodsByFilter = createAsyncThunk<GoodType[], Partial<getGoodsByFilterProps> | '', ThunkConfig<string>>(
    '/getGoodsByFilter',
    async (Data, thunkAPI) => {
        const { extra, dispatch, rejectWithValue } = thunkAPI;

        try {
            const payload = Data || {}
            const response = await extra.api.post('/goods/search', payload);

            if (!response.data) {
                console.log('error');
                throw new Error();
            }

            dispatch(FilterSliceActions.setFiltredGoods(response.data));

            return response.data;
        } catch (e) {
            console.log(e);
            return rejectWithValue('error');
        }
    },
);
