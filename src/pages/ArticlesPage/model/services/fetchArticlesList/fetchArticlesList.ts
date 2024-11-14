import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/store';
import { ArticleType, IArticle } from '@/entities/article';
import {
    getArticlesPageLimit,
    getArticlesPageOrder,
    getArticlesPagePage,
    getArticlesPageSearch,
    getArticlesPageSort,
    getArticlesPageType
} from '../../selectors/getArticlesPageData';
import { addQueryParams } from '@/shared/lib/url/addQueryParams/addQueryParams';

interface FetchArticlesListProps {
    replace?: boolean;
}

export const fetchArticlesList = createAsyncThunk<
    IArticle[],
    FetchArticlesListProps,
    ThunkConfig<string>
>('articlesPage/fetchArticleList', async (props, thunkApi) => {
    const { rejectWithValue, extra, getState } = thunkApi;
    const limit = getArticlesPageLimit(getState());
    const page = getArticlesPagePage(getState());
    const sort = getArticlesPageSort(getState());
    const order = getArticlesPageOrder(getState());
    const search = getArticlesPageSearch(getState());
    const type = getArticlesPageType(getState());

    try {
        addQueryParams({
            sort,
            order,
            search,
            type
        });
        const response = await extra.api.get<IArticle[]>(`/articles`, {
            params: {
                _expand: 'user',
                _limit: limit,
                _page: page,
                _sort: sort,
                _order: order,
                q: search,
                type: type === ArticleType.ALL ? undefined : type
            }
        });

        if (!response.data) {
            throw new Error();
        }

        return response.data;
    } catch (e: any) {
        return rejectWithValue(e.message);
    }
});
