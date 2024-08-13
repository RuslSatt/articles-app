import { createAsyncThunk } from '@reduxjs/toolkit';
import { userActions } from '@/entities/user';
import { ThunkConfig } from '@/app/providers/store';
import { IProfile } from '../types/profile';

export const fetchProfileData = createAsyncThunk<IProfile, void, ThunkConfig<string>>(
    'profile/fetchProfileData',
    async (_, thunkApi) => {
        const { rejectWithValue, extra } = thunkApi;

        try {
            const response = await extra.api.get<IProfile>('/profile');

            return response.data;
        } catch (e) {
            return rejectWithValue(e.message);
        }
    }
);
