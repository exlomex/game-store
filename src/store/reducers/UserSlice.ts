import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {cartItem, tokenInfoTypes, UserRoles, UserSliceSchema} from "./UserSliceSchema";
import {USER_ACCESS_TOKEN_KEY} from "@/const/localStorage";
import {jwtDecode} from "jwt-decode";
import {UserData} from "../services/loginByUsername";


const initialState: UserSliceSchema = {
    isAuth: false,
    role: UserRoles.GUEST,
    searchIsOpen: false,
    cartItems: [],
    activeCartCheckboxes: {},
};

export const UserSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setAuth: (state: UserSliceSchema, action: PayloadAction<UserData>) => {
            const accessToken = action.payload.accessToken
            state.isAuth = true;

            const tokenInfo: tokenInfoTypes = jwtDecode(accessToken || '')
            state.role = tokenInfo.role;

            localStorage.setItem(USER_ACCESS_TOKEN_KEY, accessToken);
        },
        logout: (state: UserSliceSchema) => {
            state.isAuth = false;
            state.role = UserRoles.GUEST;
            localStorage.removeItem(USER_ACCESS_TOKEN_KEY);
        },
        initAuth: (state: UserSliceSchema) => {
            const token = localStorage.getItem(USER_ACCESS_TOKEN_KEY);
            if (token) {
                state.isAuth = true;

                const tokenInfo: tokenInfoTypes = jwtDecode(token || '')
                state.role = tokenInfo.role;
            }
        },
        setSearchIsOpen: (state: UserSliceSchema, action: PayloadAction<boolean>) => {
            state.searchIsOpen = action.payload
        },
        setCartItems: (state: UserSliceSchema, action: PayloadAction<cartItem[]>) => {
            state.cartItems = action.payload;
        },
        clearCartItems: (state: UserSliceSchema) => {
            state.cartItems = []
        },
        toggleActiveCartCheckbox: (state: UserSliceSchema, action: PayloadAction<number>) => {
            if (state.activeCartCheckboxes[action.payload]) {
                state.activeCartCheckboxes[action.payload] = !state.activeCartCheckboxes[action.payload]
            } else {
                state.activeCartCheckboxes[action.payload] = true
            }
        },
        toggleAllActiveCartCheckboxes: (state: UserSliceSchema) => {
            const totalOfActiveCheckboxes = Object.keys(state.activeCartCheckboxes)
                .reduce((acc, currentValue) => {
                    if (state.activeCartCheckboxes[+currentValue]) return acc += 1;
                    return acc
                }, 0)


            if (totalOfActiveCheckboxes === state.cartItems.length) {state.activeCartCheckboxes = []}
            else {state.cartItems.forEach(cartItem => state.activeCartCheckboxes[cartItem.id] = true)}
        },
    }
});

export const { actions: UserSliceActions } = UserSlice;
export const { reducer: UserSliceReducer } = UserSlice;
