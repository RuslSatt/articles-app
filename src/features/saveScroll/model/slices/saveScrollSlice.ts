import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ISaveScrollSchema } from '../types/saveScroll';

export const initialState: ISaveScrollSchema = {
    scrollPosition: {}
};

export const saveScrollSlice = createSlice({
    name: 'saveScroll',
    initialState,
    reducers: {
        setScrollPosition: (
            state,
            { payload }: PayloadAction<{ path: string; position: number }>
        ) => {
            state.scrollPosition[payload.path] = payload.position;
        }
    }
});

export const { actions: saveScrollActions } = saveScrollSlice;
export const { reducer: saveScrollReducer } = saveScrollSlice;
