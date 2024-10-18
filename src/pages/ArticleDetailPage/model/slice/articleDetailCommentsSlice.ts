import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IArticleDetailCommentsSchema } from '../types/articleDetailComments';
// eslint-disable-next-line max-len
import { fetchArticleDetailComments } from '../services/fetchArticleDetailComments/fetchArticleDetailComments';
import { IComment } from '@/entities/comment';

const initialState: IArticleDetailCommentsSchema = {
    data: [],
    isLoading: false,
    error: undefined
};

export const articleDetailCommentsSlice = createSlice({
    name: 'articleDetailComments',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(
            fetchArticleDetailComments.fulfilled,
            (state, action: PayloadAction<IComment[]>) => {
                state.isLoading = false;
                state.data = action.payload;
                state.error = undefined;
            }
        );
        builder.addCase(fetchArticleDetailComments.pending, (state) => {
            state.isLoading = true;
            state.error = undefined;
        });
        builder.addCase(fetchArticleDetailComments.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        });
    }
});

export const { actions: articleDetailCommentsActions } = articleDetailCommentsSlice;
export const { reducer: articleDetailCommentsReducer } = articleDetailCommentsSlice;
