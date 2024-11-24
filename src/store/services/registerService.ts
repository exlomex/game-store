import { createAsyncThunk } from '@reduxjs/toolkit';
import { UserSliceActions } from '../reducers/UserSlice';
import {UserData} from "./loginByUsername";
import {ThunkConfig} from "@/store/config";

export interface registerServiceProps {
    firstName: string;
    lastName: string;
    username: string;
    password: string;
}

export const registerService = createAsyncThunk<UserData, registerServiceProps, ThunkConfig<string>>(
    '/registerService',
    async (RegisterData, thunkAPI) => {
        const { extra, dispatch, rejectWithValue } = thunkAPI;

        try {
            const response = await extra.api.post('/auth/register', RegisterData);

            if (!response.data) {
                throw new Error();
            }

            dispatch(UserSliceActions.setAuth(response.data));

            return response.data;
        } catch (e) {
            console.log(e);
            return rejectWithValue('error');
        }
    },
);
