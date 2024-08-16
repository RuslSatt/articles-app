import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IProfile, ProfileSchema } from '../types/profile';
import { fetchProfileData } from '../services/fetchProfileData';
import { updateProfileData } from '../services/updateProfileData';

const initialState: ProfileSchema = {
    data: undefined,
    form: undefined,
    isLoading: false,
    readonly: false,
    error: undefined
};

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        setProfileData: (state, action: PayloadAction<IProfile>) => {
            state.form = { ...state.form, ...action.payload };
        },
        setReadonly: (state, action: PayloadAction<boolean>) => {
            state.readonly = action.payload;
        },
        cancelEdit: (state) => {
            state.readonly = true;
            state.form = state.data;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProfileData.fulfilled, (state, action: PayloadAction<IProfile>) => {
            state.isLoading = false;
            state.data = action.payload;
            state.form = action.payload;
            state.error = undefined;
        });

        builder.addCase(fetchProfileData.pending, (state) => {
            state.isLoading = true;
            state.error = undefined;
        });

        builder.addCase(fetchProfileData.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        });

        builder.addCase(updateProfileData.fulfilled, (state, action: PayloadAction<IProfile>) => {
            state.isLoading = false;
            state.data = action.payload;
            state.form = action.payload;
            state.readonly = true;
            state.error = undefined;
        });

        builder.addCase(updateProfileData.pending, (state) => {
            state.isLoading = true;
            state.error = undefined;
        });

        builder.addCase(updateProfileData.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        });
    }
});

export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;
