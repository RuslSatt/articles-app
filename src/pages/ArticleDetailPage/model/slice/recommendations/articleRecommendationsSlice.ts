import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { StateSchema } from '@/app/providers/store';
import { IArticleRecommendationsSchema } from '../../types/articleRecommendations';
import { IArticle } from '@/entities/article';

const initialState: IArticleRecommendationsSchema = {
    ids: [],
    entities: {},
    isLoading: false,
    error: undefined
};

const recommendationsAdapter = createEntityAdapter<IArticle>({
    selectId: (article: IArticle) => article.id
});

export const getArticleRecommendations = recommendationsAdapter.getSelectors<StateSchema>(
    (state) => state.articleDetailsPage?.recommendations || recommendationsAdapter.getInitialState()
);

export const articleRecommendationsSlice = createSlice({
    name: 'articleRecommendationsSlice',
    initialState:
        recommendationsAdapter.getInitialState<IArticleRecommendationsSchema>(initialState),
    reducers: {}
});

export const { actions: articleRecommendationsActions } = articleRecommendationsSlice;
export const { reducer: articleRecommendationsReducer } = articleRecommendationsSlice;
