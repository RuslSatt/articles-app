import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IArticleDetailCommentsSchema } from '../types/articleDetailComments';
// eslint-disable-next-line max-len
import { fetchArticleDetailComments } from '../services/fetchArticleDetailComments/fetchArticleDetailComments';
import { IComment } from '@/entities/comment';
import { StateSchema } from '@/app/providers/store';

const initialState: IArticleDetailCommentsSchema = {
    ids: [],
    entities: {},
    isLoading: false,
    error: undefined
};

const commentsAdapter = createEntityAdapter<IComment>({
    selectId: (comment: IComment) => comment.id
});

export const getArticleComments = commentsAdapter.getSelectors<StateSchema>(
    (state) => state.articleDetailCommentsSchema || commentsAdapter.getInitialState()
);

export const articleDetailCommentsSlice = createSlice({
    name: 'articleDetailComments',
    initialState: commentsAdapter.getInitialState<IArticleDetailCommentsSchema>(initialState),
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(
            fetchArticleDetailComments.fulfilled,
            (state, action: PayloadAction<IComment[]>) => {
                state.isLoading = false;
                commentsAdapter.setAll(state, action.payload);
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
