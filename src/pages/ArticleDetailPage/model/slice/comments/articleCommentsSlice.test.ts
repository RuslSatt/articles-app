import { DeepPartial } from '@reduxjs/toolkit';
import { IComment } from '@/entities/comment';
import { articleCommentsReducer } from './articleCommentsSlice';
import { IArticleCommentsSchema } from '../../types/articleComments';
import { fetchArticleComments } from '../../services/fetchArticleComments/fetchArticleComments';

const data: IComment = {
    id: '1',
    text: 'test',
    user: {
        id: '1',
        username: 'admin',
        avatar: ''
    },
    articleId: '1',
    createdAt: new Date(),
    updatedAt: new Date()
};

describe('articleCommentsSlice', () => {
    test('should fetch article comments', () => {
        const state: DeepPartial<IArticleCommentsSchema> = {
            ids: [],
            entities: {},
            isLoading: true,
            error: 'error'
        };

        expect(
            articleCommentsReducer(
                state as IArticleCommentsSchema,
                fetchArticleComments.fulfilled([data], '', '1')
            )
        ).toEqual({
            ids: ['1'],
            entities: { '1': data },
            isLoading: false,
            error: undefined
        });
    });
});
