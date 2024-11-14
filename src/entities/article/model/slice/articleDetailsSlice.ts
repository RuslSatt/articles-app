import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ArticleDetailsSchema, IArticle } from '../types/article';
import { fetchArticleById } from '../services/fetchArticleById/fetchArticleById';

const initialState: ArticleDetailsSchema = {
    data: undefined,
    isLoading: false,
    error: undefined
};

export const articleDetailsSlice = createSlice({
    name: 'articleDetails',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchArticleById.fulfilled, (state, action: PayloadAction<IArticle>) => {
            state.isLoading = false;
            state.data = action.payload;
            state.error = undefined;
        });

        builder.addCase(fetchArticleById.pending, (state) => {
            state.isLoading = true;
            state.error = undefined;
        });

        builder.addCase(fetchArticleById.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        });
    }
});

export const { actions: articleDetailsActions } = articleDetailsSlice;
export const { reducer: articleDetailsReducer } = articleDetailsSlice;
