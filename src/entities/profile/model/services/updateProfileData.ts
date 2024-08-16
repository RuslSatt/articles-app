import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/store';
import { IProfile } from '../types/profile';

export const updateProfileData = createAsyncThunk<IProfile, void, ThunkConfig<string>>(
    'profile/updateProfileData',
    async (_, thunkApi) => {
        const { rejectWithValue, extra, getState } = thunkApi;

        const { form } = getState().profile || {};

        try {
            const response = await extra.api.post('/profile', form);

            return response.data;
        } catch (e: any) {
            return rejectWithValue(e.message);
        }
    }
);
