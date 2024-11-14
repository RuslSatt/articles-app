import { DeepPartial } from '@reduxjs/toolkit';
import { ArticleBlockType, ArticleDetailsSchema, ArticleType, IArticle } from '../types/article';
import { articleDetailsReducer } from './articleDetailsSlice';
import { fetchArticleById } from '../services/fetchArticleById/fetchArticleById';

const data: IArticle = {
    id: '1',
    title: 'Javascript news',
    subtitle: 'Что нового в JS за 2022 год?',
    img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
    views: 1022,
    createdAt: '26.02.2022',
    user: {
        id: '1',
        username: 'Admin',
        avatar: 'https://i.pravatar.cc/300'
    },
    type: [ArticleType.IT],
    blocks: [
        {
            id: '1',
            type: ArticleBlockType.TEXT,
            title: 'Заголовок этого блока',
            paragraphs: ['Программа, которую по традиции называют «Hello, world!»']
        }
    ]
};

describe('articleDetailsSlice', () => {
    test('should fetch article data', () => {
        const state: DeepPartial<ArticleDetailsSchema> = {
            data: undefined,
            isLoading: true,
            error: 'error'
        };

        expect(
            articleDetailsReducer(
                state as ArticleDetailsSchema,
                fetchArticleById.fulfilled(data, '', '1')
            )
        ).toEqual({
            data,
            isLoading: false,
            error: undefined
        });
    });
});
