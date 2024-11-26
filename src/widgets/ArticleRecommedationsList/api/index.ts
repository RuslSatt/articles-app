import { IArticle } from '@/entities/article';
import { rtkApi } from '@/shared/api/rtk';

const recommendationsApi = rtkApi.injectEndpoints({
    endpoints: (builder) => ({
        fetchArticleRecommendations: builder.query<IArticle[], number>({
            query: (limit) => ({
                url: '/articles',
                params: {
                    _limit: limit
                }
            })
        })
    })
});

export const { useFetchArticleRecommendationsQuery } = recommendationsApi;
