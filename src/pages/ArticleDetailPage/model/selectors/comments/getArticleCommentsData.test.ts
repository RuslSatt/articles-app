import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from '@/app/providers/store';
import { IComment } from '@/entities/comment';
import { getArticleCommentsError, getArticleCommentsIsLoading } from './getArticleCommentsData';

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

describe('getArticleCommentsIsLoading', () => {
    test('should work loading state', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetailComments: {
                ids: ['1'],
                entities: { '1': data },
                isLoading: true
            }
        };
        expect(getArticleCommentsIsLoading(state as StateSchema)).toEqual(true);
    });
});

describe('getArticleDetailsError', () => {
    test('should work with error state', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetailComments: {
                ids: ['1'],
                entities: { '1': data },
                error: 'error'
            }
        };
        expect(getArticleCommentsError(state as StateSchema)).toEqual('error');
    });
});
