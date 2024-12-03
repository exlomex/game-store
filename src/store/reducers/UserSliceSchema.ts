import {JwtPayload} from "jwt-decode";
import {GoodType} from "@/types/goodsTypes";

export enum UserRoles {
    ADMIN =  'ADMIN',
    USER = 'USER',
    GUEST = 'GUEST'
}

export interface cartItem {
    id: number;
    quantity: number;
    good: GoodType;
    userId: number;
}

export interface UserSliceSchema {
    isAuth: boolean;
    role: UserRoles;
    searchIsOpen: boolean;
    cartItems: cartItem[]
    activeCartCheckboxes: Record<number, boolean>;
    isAsideCollapsed: boolean;
    selectedPromo: string;
}

export interface tokenInfoTypes extends JwtPayload {
    id: number,
    username: string,
    role: UserRoles,
}


