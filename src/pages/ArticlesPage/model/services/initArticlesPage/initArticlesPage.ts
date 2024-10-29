import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/store';
import { getArticlesPageMounted } from '../../selectors/getArticlesPageData';
import { articlesPageActions } from '../../slice/articlesPageSlice';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';

export interface FetchArticlesListProps {
    page?: number;
}

export const initArticlesPage = createAsyncThunk<void, void, ThunkConfig<string>>(
    'articlesPage/initArticlesPage',
    async (_, thunkApi) => {
        const { getState, dispatch } = thunkApi;
        const mounted = getArticlesPageMounted(getState());

        if (mounted) return;

        dispatch(articlesPageActions.init());
        dispatch(
            fetchArticlesList({
                page: 1
            })
        );
    }
);
