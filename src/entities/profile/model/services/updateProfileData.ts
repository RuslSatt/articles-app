import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/store';
import { IProfile, ValidateProfileError } from '../types/profile';
import { getProfileForm } from '../selectors/getProfileForm';
import { validateProfileData } from './validateProfileData';

export const updateProfileData = createAsyncThunk<
    IProfile,
    void,
    ThunkConfig<ValidateProfileError[]>
>('profile/updateProfileData', async (_, thunkApi) => {
    const { rejectWithValue, extra, getState } = thunkApi;

    const formData = getProfileForm(getState()) || {};

    const errors = validateProfileData(formData);

    if (errors.length) {
        return rejectWithValue(errors);
    }

    try {
        const response = await extra.api.put<IProfile>('/profile', formData);

        return response.data;
    } catch (e: any) {
        return rejectWithValue(e.message);
    }
});
