import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/store';
import { getProfileForm } from '../../selectors/getProfileData';
import { validateProfileData } from '../validateProfileData/validateProfileData';
import { IProfile } from '@/entities/profile';
import { ValidateProfileError } from '../../types/editableProfileCard';

export const updateProfileData = createAsyncThunk<
    IProfile,
    void,
    ThunkConfig<ValidateProfileError[]>
>('profile/updateProfileData', async (_, thunkApi) => {
    const { rejectWithValue, extra, getState } = thunkApi;

    const formData = getProfileForm(getState());

    if (!formData) {
        return rejectWithValue([ValidateProfileError.NO_DATA]);
    }

    const errors = validateProfileData(formData);

    if (errors.length) {
        return rejectWithValue(errors);
    }

    try {
        const response = await extra.api.put<IProfile>(`/profile/${formData.id}`, formData);

        if (!response.data) {
            throw new Error();
        }

        return response.data;
    } catch (e: any) {
        return rejectWithValue([ValidateProfileError.SERVER_ERROR]);
    }
});
