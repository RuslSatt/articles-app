import { createAsyncThunk } from '@reduxjs/toolkit';
import { User, userActions } from '@/entities/user';
import { ThunkConfig } from '@/app/providers/store';

export const loginByUsername = createAsyncThunk<User, undefined, ThunkConfig<string>>(
    'login/loginByUsername',
    async (_, thunkApi) => {
        const { getState, dispatch, rejectWithValue, extra } = thunkApi;

        try {
            const { username, password } = getState().login || {};

            const response = await extra.api.post('/login', {
                username,
                password
            });

            if (!response) {
                throw new Error();
            }

            dispatch(userActions.setUser(response.data));

            return response.data;
        } catch (e: any) {
            return rejectWithValue(e.message);
        }
    }
);
