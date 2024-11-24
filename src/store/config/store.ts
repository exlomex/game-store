import {StateSchema, ThunkExtraArg} from "./StateSchema";
import {configureStore, ReducersMapObject} from "@reduxjs/toolkit";
import {rtkApi} from "@/api/RtkApi";
import {$api} from "@/api/AxiosApi";
import {UserSliceReducer} from "@/store/reducers/UserSlice";

export function createReduxStore(initialState?: StateSchema) {
    const rootReducers: ReducersMapObject<StateSchema> = {
        user: UserSliceReducer,
        [rtkApi.reducerPath]: rtkApi.reducer,
    };

    const extraArg: ThunkExtraArg = {
        api: $api,
    };

    return configureStore({
        reducer: rootReducers,
        preloadedState: initialState,
        devTools: process.env.NODE_ENV !== 'production',
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                thunk: {
                    extraArgument: extraArg,
                },
            }).concat(rtkApi.middleware)
    });
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];