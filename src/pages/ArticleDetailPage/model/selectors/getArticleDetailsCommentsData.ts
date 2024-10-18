import { StateSchema } from '@/app/providers/store';

export const getArticleDetailCommentsIsLoading = (state: StateSchema) =>
    state.articleDetailCommentsSchema?.isLoading;
export const getArticleDetailCommentsError = (state: StateSchema) =>
    state.articleDetailCommentsSchema?.error;
