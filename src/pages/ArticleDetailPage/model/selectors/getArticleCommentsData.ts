import { StateSchema } from '@/app/providers/store';

export const getArticleCommentsIsLoading = (state: StateSchema) =>
    state.articleDetailCommentsSchema?.isLoading;
export const getArticleCommentsError = (state: StateSchema) =>
    state.articleDetailCommentsSchema?.error;
