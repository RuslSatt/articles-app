import { AnyAction, combineReducers, Reducer } from '@reduxjs/toolkit';
import { IArticleDetailsPageSchema } from '../types';
import { articleCommentsReducer } from './comments/articleCommentsSlice';
import { articleRecommendationsReducer } from './recommendations/articleRecommendationsSlice';
import { IArticleCommentsSchema } from '../types/articleComments';
import { IArticleRecommendationsSchema } from '../types/articleRecommendations';

export const articleDetailsPageReducer = combineReducers<IArticleDetailsPageSchema>({
    comments: articleCommentsReducer as Reducer<IArticleCommentsSchema | undefined, AnyAction>,
    recommendations: articleRecommendationsReducer as Reducer<
        IArticleRecommendationsSchema | undefined,
        AnyAction
    >
});
