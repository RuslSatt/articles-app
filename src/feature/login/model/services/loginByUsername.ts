import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '@/shared/api/base';
import { User } from '@/entities/user';
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

        return response.data;
    } catch (e) {
        console.log(e);
        return thunkApi.rejectWithValue('error');
    }
});
