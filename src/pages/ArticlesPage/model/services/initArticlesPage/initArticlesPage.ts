import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/store';
import { getArticlesPageMounted } from '../../selectors/getArticlesPageData';
import { articlesPageActions } from '../../slice/articlesPageSlice';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';
import { SortOrder } from '@/shared/types/sort';
import { ArticleSortField, ArticleType } from '@/entities/article';

export interface FetchArticlesListProps {
    page?: number;
}

export const initArticlesPage = createAsyncThunk<void, URLSearchParams, ThunkConfig<string>>(
    'articlesPage/initArticlesPage',
    async (searchParams, thunkApi) => {
        const { getState, dispatch } = thunkApi;
        const mounted = getArticlesPageMounted(getState());

        if (mounted) return;

        const order = searchParams.get('order') as SortOrder;
        const sort = searchParams.get('sort') as ArticleSortField;
        const search = searchParams.get('search');
        const type = searchParams.get('type') as ArticleType;

        if (order) {
            dispatch(articlesPageActions.setOrder(order));
        }
        if (sort) {
            dispatch(articlesPageActions.setSort(sort));
        }
        if (search) {
            dispatch(articlesPageActions.setSearch(search));
        }
        if (type) {
            dispatch(articlesPageActions.setType(type));
        }

        dispatch(articlesPageActions.init());
        dispatch(fetchArticlesList({}));
    }
);
