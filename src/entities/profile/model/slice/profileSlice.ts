import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProfileSchema } from '../types/profile';

const initialState: ProfileSchema = {
    data: undefined,
    isLoading: false,
    readonly: true,
    error: undefined
};

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        setProfileData: (state, action: PayloadAction<ProfileSchema>) => {
            state = action.payload;
            return state;
        }
    }
});

export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;
