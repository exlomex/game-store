import {rtkApi} from "@/api/RtkApi";
import {AxiosInstance} from "axios";
import {UserSliceSchema} from "@/store/reducers/UserSliceSchema";

export interface StateSchema {
    user: UserSliceSchema;
    [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>;
}

export interface ThunkExtraArg {
    api: AxiosInstance;
}

export interface ThunkConfig<T> {
    rejectValue: T;
    extra: ThunkExtraArg;
    state: StateSchema;
}