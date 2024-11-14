import { StateSchema } from '@/app/providers/store';

export const getArticleCommentsIsLoading = (state: StateSchema) =>
    state.articleDetailsPage?.comments?.isLoading;
export const getArticleCommentsError = (state: StateSchema) =>
    state.articleDetailsPage?.comments?.error;
