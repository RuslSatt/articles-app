import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StateSchema } from '@/app/providers/store';
import { IArticlePageSchema } from '../types/articlesPage';
import { ArticleView, IArticle } from '@/entities/article';
import { fetchArticlesList } from '../services/fetchArticlesList/fetchArticlesList';
import { ARTICLE_VIEW_KEY } from '@/shared/const/storage';

const initialState: IArticlePageSchema = {
    ids: [],
    entities: {},
    isLoading: false,
    view: ArticleView.LIST,
    error: undefined
};

const commentsAdapter = createEntityAdapter<IArticle>({
    selectId: (comment: IArticle) => comment.id
});

export const getArticlesList = commentsAdapter.getSelectors<StateSchema>(
    (state) => state.articlesPage || commentsAdapter.getInitialState()
);

export const articlesPageSlice = createSlice({
    name: 'articlesPageSlice',
    initialState: commentsAdapter.getInitialState<IArticlePageSchema>(initialState),
    reducers: {
        setView: (state, action: PayloadAction<ArticleView>) => {
            state.view = action.payload;
            localStorage.setItem(ARTICLE_VIEW_KEY, action.payload);
        },
        init(state) {
            state.view = localStorage.getItem(ARTICLE_VIEW_KEY) as ArticleView;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchArticlesList.fulfilled, (state, action: PayloadAction<IArticle[]>) => {
            state.isLoading = false;
            commentsAdapter.setAll(state, action.payload);
            state.error = undefined;
        });
        builder.addCase(fetchArticlesList.pending, (state) => {
            state.isLoading = true;
            state.error = undefined;
        });
        builder.addCase(fetchArticlesList.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        });
    }
});

export const { actions: articlesPageActions } = articlesPageSlice;
export const { reducer: articlesPageReducer } = articlesPageSlice;
