import {createSelector} from "@reduxjs/toolkit";
import {getUser} from "./getUser";
import {UserSliceSchema} from "@/store/reducers/UserSliceSchema";
import {FilterSliceSchema} from "@/store/reducers/FilterSliceSchema";
import {getFilter} from "@/store/selectors/getFilter";
export const getFilterGenre = createSelector(
    getFilter,
    (filter: FilterSliceSchema) => filter.genre,
);

export const getFilterConsole = createSelector(
    getFilter,
    (filter: FilterSliceSchema) => filter.console,
);

export const getFilterRating = createSelector(
    getFilter,
    (filter: FilterSliceSchema) => filter.rating,
);

export const getFilterGoods = createSelector(
    getFilter,
    (filter: FilterSliceSchema) => filter.filtredGoods,
);

