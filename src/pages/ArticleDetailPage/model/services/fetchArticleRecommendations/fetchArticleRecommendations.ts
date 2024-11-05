import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/store';
import { IArticle } from '@/entities/article';

export const fetchArticleRecommendations = createAsyncThunk<IArticle[], void, ThunkConfig<string>>(
    'articleDetail/fetchArticleRecommendations',
    async (props, thunkApi) => {
        const { rejectWithValue, extra } = thunkApi;

        try {
            const response = await extra.api.get<IArticle[]>(`/articles`, {
                params: {
                    _expand: 'user',
                    _limit: 4
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
