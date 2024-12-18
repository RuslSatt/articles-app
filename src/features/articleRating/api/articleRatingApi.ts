import { IRating } from '@/entities/rating';
import { rtkApi } from '@/shared/api/rtk';

interface IGetArticleRating {
    userId: string;
    articleId: string;
}

interface IRateArticle {
    userId: string;
    articleId: string;
    rate: number;
    feedback?: string;
}

const articleRatingApi = rtkApi.injectEndpoints({
    endpoints: (builder) => ({
        getArticleRating: builder.query<IRating[], IGetArticleRating>({
            query: ({ userId, articleId }) => ({
                url: '/article-ratings',
                params: {
                    userId,
                    articleId
                }
            })
        }),
        rateArticle: builder.mutation<void, IRateArticle>({
            query: (body: IRateArticle) => ({
                url: '/article-ratings',
                method: 'POST',
                body
            })
        })
    })
});

export const { useGetArticleRatingQuery } = articleRatingApi;
export const { useRateArticleMutation } = articleRatingApi;
