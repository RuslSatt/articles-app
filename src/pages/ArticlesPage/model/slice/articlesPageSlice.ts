import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StateSchema } from '@/app/providers/store';
import { IArticlePageSchema } from '../types/articlesPage';
import { ArticleSortField, ArticleType, ArticleView, IArticle } from '@/entities/article';
import { fetchArticlesList } from '../services/fetchArticlesList/fetchArticlesList';
import { ARTICLE_VIEW_KEY } from '@/shared/const/storage';
import { SortOrder } from '@/shared/types/sort';

const initialState: IArticlePageSchema = {
    ids: [],
    entities: {},
    isLoading: false,
    view: ArticleView.LIST,
    error: undefined,
    page: 1,
    hasMore: true,
    limit: 5,
    order: 'asc',
    sort: ArticleSortField.CREATED_DATE,
    search: '',
    type: ArticleType.ALL,

    _mounted: false
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
            const view = localStorage.getItem(ARTICLE_VIEW_KEY) as ArticleView;
            state.view = view;
            state.limit = view === ArticleView.LIST ? 5 : 10;
            state._mounted = true;
        },
        setPage: (state, action: PayloadAction<number>) => {
            state.page = action.payload;
        },
        setOrder: (state, action: PayloadAction<SortOrder>) => {
            state.order = action.payload;
        },
        setSort: (state, action: PayloadAction<ArticleSortField>) => {
            state.sort = action.payload;
        },
        setSearch: (state, action: PayloadAction<string>) => {
            state.search = action.payload;
        },
        setType(state, action: PayloadAction<ArticleType>) {
            state.type = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchArticlesList.fulfilled, (state, action) => {
            state.isLoading = false;

            state.error = undefined;
            state.hasMore = action.payload.length >= state.limit;

            if (action.meta.arg.replace) {
                commentsAdapter.setAll(state, action.payload);
            } else {
                commentsAdapter.addMany(state, action.payload);
            }
        });
        builder.addCase(fetchArticlesList.pending, (state, action) => {
            state.isLoading = true;
            state.error = undefined;

            if (action.meta.arg.replace) {
                commentsAdapter.removeAll(state);
            }
        });
        builder.addCase(fetchArticlesList.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        });
    }
});

export const { actions: articlesPageActions } = articlesPageSlice;
export const { reducer: articlesPageReducer } = articlesPageSlice;
