import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/store';
import { IArticle } from '@/entities/article';
import { getArticlesPageLimit } from '../../selectors/getArticlesPageData';

export interface FetchArticlesListProps {
    page?: number;
}

export const fetchArticlesList = createAsyncThunk<
    IArticle[],
    FetchArticlesListProps,
    ThunkConfig<string>
>('articlesPage/fetchArticleList', async (props, thunkApi) => {
    const { page = 1 } = props;
    const { rejectWithValue, extra, getState } = thunkApi;
    const limit = getArticlesPageLimit(getState());

    try {
        const response = await extra.api.get<IArticle[]>(`/articles`, {
            params: {
                _expand: 'user',
                _limit: limit,
                _page: page
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
