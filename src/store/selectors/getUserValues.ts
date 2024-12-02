import {createSelector} from "@reduxjs/toolkit";
import {getUser} from "./getUser";
import {UserSliceSchema} from "@/store/reducers/UserSliceSchema";
export const getUserAuth = createSelector(
    getUser,
    (search: UserSliceSchema) => search.isAuth,
);

export const getUserRole = createSelector(
    getUser,
    (search: UserSliceSchema) => search.role,
);

export const getUserSearchIsOpen = createSelector(
    getUser,
    (search: UserSliceSchema) => search.searchIsOpen,
);

export const getUserCartIds = createSelector(
    getUser,
    (user: UserSliceSchema) => {
        const userCartIds: number[] = []
        user.cartItems.forEach(cartItem => userCartIds.push(cartItem.good.id))
        return userCartIds;
    },
);

export const getUserCartIdByGoodId = (id: number) => createSelector(
    getUser,
    (user: UserSliceSchema) => {
        let cartId = -1;
        user.cartItems.forEach(cartItem => cartItem.good.id === id ? cartId = cartItem.id : null)
        return cartId;
    },
);

export const getUserActiveCartCheckboxes = createSelector(
    getUser,
    (user: UserSliceSchema) => user.activeCartCheckboxes
);

export const getUserActiveCartCheckboxesArray = createSelector(
    getUser,
    (user: UserSliceSchema) => {
        const activeIdsArray: number[] = []
        Object.keys(user.activeCartCheckboxes).forEach(key => {
            if (user.activeCartCheckboxes[+key]) activeIdsArray.push(+key)
        })
        return activeIdsArray;
    }
);

export const getUserIsAllCartCheckboxesActive = createSelector(
    getUser,
    (user: UserSliceSchema) => {
        const totalOfActiveCheckboxes = Object.keys(user.activeCartCheckboxes)
            .reduce((acc, currentValue) => {
                if (user.activeCartCheckboxes[+currentValue]) return acc += 1;
                return acc
            }, 0)

        return totalOfActiveCheckboxes === user.cartItems.length;
    }
);