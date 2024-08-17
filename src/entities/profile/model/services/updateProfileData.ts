import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/store';
import { IProfile } from '../types/profile';
import { getProfileForm } from '../selectors/getProfileForm';

export const updateProfileData = createAsyncThunk<IProfile, void, ThunkConfig<string>>(
    'profile/updateProfileData',
    async (_, thunkApi) => {
        const { rejectWithValue, extra, getState } = thunkApi;

        const formData = getProfileForm(getState()) || {};

        try {
            const response = await extra.api.put<IProfile>('/profile', formData);

            return response.data;
        } catch (e: any) {
            return rejectWithValue(e.message);
        }
    }
);
