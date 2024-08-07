import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '@/shared/api/base';
import { User, userActions } from '@/entities/user';
import { StateSchema } from '@/app/providers/store';

export const loginByUsername = createAsyncThunk<
    User,
    undefined,
    { rejectValue: string; state: StateSchema }
>('login/loginByUsername', async (_, thunkApi) => {
    try {
        const { username, password } = thunkApi.getState().login;

        const response = await api.post('/login', {
            username,
            password
        });

        if (!response) {
            throw new Error();
        }

        thunkApi.dispatch(userActions.setUser(response.data));

        return response.data;
    } catch (e) {
        return thunkApi.rejectWithValue(e.message);
    }
});
