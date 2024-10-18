import { StateSchema } from '@/app/providers/store';

export const getArticleDetailCommentsData = (state: StateSchema) =>
    state.articleDetailCommentsSchema?.data;
export const getArticleDetailCommentsIsLoading = (state: StateSchema) =>
    state.articleDetailCommentsSchema?.isLoading;
export const getArticleDetailCommentsError = (state: StateSchema) =>
    state.articleDetailCommentsSchema?.error;
