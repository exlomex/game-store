import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {AllConsoles, AllGenres, AllRatings, FilterSliceSchema} from "@/store/reducers/FilterSliceSchema";
import {GoodType} from "@/types/goodsTypes";
import {getGoodsByFilter} from "@/store/services/getGoodsByFilter";


const initialState: FilterSliceSchema = {
    console: '',
    genre: '',
    rating: '',
    filtredGoods: [],
    isLoading: false,
};

export const FilterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setGenreFilter: (state: FilterSliceSchema, action: PayloadAction<AllGenres | ''>) => {
            state.genre = action.payload
        },
        setConsoleFilter: (state: FilterSliceSchema, action: PayloadAction<AllConsoles | ''>) => {
            state.console = action.payload
        },
        setRatingFilter: (state: FilterSliceSchema, action: PayloadAction<AllRatings | ''>) => {
            state.rating = action.payload
        },
        setFiltredGoods: (state: FilterSliceSchema, action: PayloadAction<GoodType[]>) => {
            state.filtredGoods = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getGoodsByFilter.pending, (state: FilterSliceSchema) => {
                state.isLoading = true;
                state.error = undefined;
            })
            .addCase(getGoodsByFilter.fulfilled, (state: FilterSliceSchema) => {
                state.isLoading = false;
            })
            .addCase(getGoodsByFilter.rejected, (state: FilterSliceSchema, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: FilterSliceActions } = FilterSlice;
export const { reducer: FilterSliceReducer } = FilterSlice;
