import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/store';
import {
    getArticlesPageHasMore,
    getArticlesPageIsLoading,
    getArticlesPagePage
} from '../../selectors/getArticlesPageData';
import { articlesPageActions } from '../../slice/articlesPageSlice';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';

export interface FetchArticlesListProps {
    page?: number;
}

export const fetchNextArticlesPage = createAsyncThunk<void, void, ThunkConfig<string>>(
    'articlesPage/fetchNextArticlesPage',
    async (_, thunkApi) => {
        const { getState, dispatch } = thunkApi;
        const hasMore = getArticlesPageHasMore(getState());
        const page = getArticlesPagePage(getState());
        const isLoading = getArticlesPageIsLoading(getState());

        if (!hasMore || isLoading) return;
        dispatch(articlesPageActions.setPage(page + 1));
        dispatch(fetchArticlesList({}));
    }
);
