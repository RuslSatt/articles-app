import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IArticleCommentsSchema } from '../types/articleComments';
// eslint-disable-next-line max-len
import { fetchArticleComments } from '../services/fetchArticleComments/fetchArticleComments';
import { IComment } from '@/entities/comment';
import { StateSchema } from '@/app/providers/store';

const initialState: IArticleCommentsSchema = {
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

export const articleCommentsSlice = createSlice({
    name: 'articleCommentsSlice',
    initialState: commentsAdapter.getInitialState<IArticleCommentsSchema>(initialState),
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(
            fetchArticleComments.fulfilled,
            (state, action: PayloadAction<IComment[]>) => {
                state.isLoading = false;
                commentsAdapter.setAll(state, action.payload);
                state.error = undefined;
            }
        );
        builder.addCase(fetchArticleComments.pending, (state) => {
            state.isLoading = true;
            state.error = undefined;
        });
        builder.addCase(fetchArticleComments.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        });
    }
});

export const { actions: articleCommentsActions } = articleCommentsSlice;
export const { reducer: articleCommentsReducer } = articleCommentsSlice;
