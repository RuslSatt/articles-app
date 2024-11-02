import { StateSchema } from '@/app/providers/store';
import { ArticleSortField } from '@/entities/article';

export const getArticlesPageIsLoading = (state: StateSchema) => state.articlesPage?.isLoading;
export const getArticlesPageError = (state: StateSchema) => state.articlesPage?.error;
export const getArticlesPageView = (state: StateSchema) => state.articlesPage?.view;
export const getArticlesPagePage = (state: StateSchema) => state.articlesPage?.page || 1;
export const getArticlesPageHasMore = (state: StateSchema) => state.articlesPage?.hasMore;
export const getArticlesPageLimit = (state: StateSchema) => state.articlesPage?.limit;
export const getArticlesPageMounted = (state: StateSchema) => state.articlesPage?._mounted;
export const getArticlesPageSort = (state: StateSchema) =>
    state.articlesPage?.sort ?? ArticleSortField.CREATED_DATE;
export const getArticlesPageOrder = (state: StateSchema) => state.articlesPage?.order ?? 'asc';
export const getArticlesPageSearch = (state: StateSchema) => state.articlesPage?.search ?? '';
