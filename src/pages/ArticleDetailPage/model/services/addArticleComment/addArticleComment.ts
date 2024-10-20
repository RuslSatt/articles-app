import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/store';
import { IComment } from '@/entities/comment';
import { getUserData } from '@/entities/user';
import { getArticleDetailsData } from '@/entities/article';
import { fetchArticleComments } from '../fetchArticleComments/fetchArticleComments';

export const addArticleComment = createAsyncThunk<IComment, string, ThunkConfig<string>>(
    'articleDetails/addArticleComment',
    async (text, thunkApi) => {
        const { rejectWithValue, extra, dispatch } = thunkApi;

        const user = getUserData(thunkApi.getState());
        const article = getArticleDetailsData(thunkApi.getState());

        if (!text || !user || !article) {
            return rejectWithValue('no data');
        }

        const data = {
            text,
            articleId: article?.id,
            userId: user?.id
        };

        try {
            const response = await extra.api.post<IComment>(`/comments`, data);

            if (!response.data) {
                throw new Error();
            }

            dispatch(fetchArticleComments(article.id));

            return response.data;
        } catch (e: any) {
            return rejectWithValue(e.message);
        }
    }
);
