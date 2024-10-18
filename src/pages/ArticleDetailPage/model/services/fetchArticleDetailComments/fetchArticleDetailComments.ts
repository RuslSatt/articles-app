import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/store';
import { IComment } from '@/entities/comment';

export const fetchArticleDetailComments = createAsyncThunk<
    IComment[],
    string | undefined,
    ThunkConfig<string>
>('articleDetail/fetchArticleDetailsCommentsById', async (articleId, thunkApi) => {
    const { rejectWithValue, extra } = thunkApi;

    if (!articleId) {
        return rejectWithValue('error');
    }

    try {
        const response = await extra.api.get<IComment[]>(`/comments`, {
            params: {
                articleId,
                _expand: 'user'
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
