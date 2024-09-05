import { createSlice } from '@reduxjs/toolkit';
import { UserSchema } from '../types/user';
import { LOCAL_STORAGE_USER_KEY } from '@/shared/const/storage';

const initialState: UserSchema = {
    user: undefined,
    _mounted: false
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
            localStorage.setItem(LOCAL_STORAGE_USER_KEY, JSON.stringify(action.payload));
        },

        initUser: (state) => {
            const user = localStorage.getItem(LOCAL_STORAGE_USER_KEY);
            if (user) {
                state.user = JSON.parse(user);
            }
            state._mounted = true;
        },

        logout: (state) => {
            state.user = undefined;
            localStorage.removeItem(LOCAL_STORAGE_USER_KEY);
        }
    }
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
