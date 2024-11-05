import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StateSchema } from '@/app/providers/store';
import { IArticleRecommendationsSchema } from '../../types/articleRecommendations';
import { IArticle } from '@/entities/article';
// eslint-disable-next-line max-len
import { fetchArticleRecommendations } from '../../services/fetchArticleRecommendations/fetchArticleRecommendations';

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
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(
            fetchArticleRecommendations.fulfilled,
            (state, action: PayloadAction<IArticle[]>) => {
                state.isLoading = false;
                recommendationsAdapter.setAll(state, action.payload);
                state.error = undefined;
            }
        );
        builder.addCase(fetchArticleRecommendations.pending, (state) => {
            state.isLoading = true;
            state.error = undefined;
        });
        builder.addCase(fetchArticleRecommendations.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        });
    }
});

export const { actions: articleRecommendationsActions } = articleRecommendationsSlice;
export const { reducer: articleRecommendationsReducer } = articleRecommendationsSlice;
