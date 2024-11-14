import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/store';
import { IArticle } from '../../types/article';

export const fetchArticleById = createAsyncThunk<IArticle, string, ThunkConfig<string>>(
    'articleDetails/fetchArticleById',
    async (id, thunkApi) => {
        const { rejectWithValue, extra } = thunkApi;

        try {
            const response = await extra.api.get<IArticle>(`/articles/${id}`, {
                params: {
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
    }
);
