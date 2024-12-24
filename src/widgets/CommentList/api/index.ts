import { IComment } from '@/entities/comment';
import { rtkApi } from '@/shared/api/rtk';

export interface IAddCommentRequest {
    text: string;
    articleId: string;
    userId: string;
}

const articleCommentsApi = rtkApi.injectEndpoints({
    endpoints: (builder) => ({
        fetchArticleComments: builder.query<IComment[], string>({
            query: (id: string) => ({
                url: `/comments`,
                params: {
                    _expand: 'user',
                    articleId: id
                }
            }),
            providesTags: (result) => ['Comments']
        }),
        addComment: builder.mutation<IComment, IAddCommentRequest>({
            query: (body: IAddCommentRequest) => ({
                url: '/comments',
                method: 'POST',
                body
            }),
            invalidatesTags: ['Comments']
        })
    })
});

export const { useFetchArticleCommentsQuery } = articleCommentsApi;
export const { useAddCommentMutation } = articleCommentsApi;
