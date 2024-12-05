import {GoodType} from "@/types/goodsTypes";

export type AllGenres = 'FIGHTING' | 'SPORT' | 'ACTION' | 'ROLE_GAME' | 'PUZZLE' | 'STRATEGY'

export type AllConsoles = 'PS4' | 'PS5' | 'XBOX' | 'PC' | 'NINTENDO'
export type AllRatings = 'GREATER_THAN_3' | 'GREATER_THAN_3_5' | 'GREATER_THAN_4' | 'GREATER_THAN_4_5'


export interface FilterSliceSchema {
    genre: AllGenres | '';
    console: AllConsoles | '';
    rating: AllRatings | '';
    filtredGoods: GoodType[];
    isLoading: boolean;
    error?: string
}

