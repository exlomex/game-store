import { createAsyncThunk } from '@reduxjs/toolkit';
import { UserSliceActions } from '../reducers/UserSlice';
import {ThunkConfig} from "@/store/config/StateSchema";

export interface loginByUsernameProps {
    password: string;
    username: string;
}

export interface UserData {
    accessToken: string;
}

export const loginByUsername = createAsyncThunk<UserData, loginByUsernameProps, ThunkConfig<string>>(
    '/loginByUsername',
    async (AuthData, thunkAPI) => {
        const { extra, dispatch, rejectWithValue } = thunkAPI;

        try {
            const response = await extra.api.post('/auth/login', AuthData);

            if (!response.data) {
                console.log('error');
                throw new Error();
            }

            dispatch(UserSliceActions.setAuth(response.data));

            return response.data;
        } catch (e) {
            console.log(e);
            return rejectWithValue('server error');
        }
    },
);
