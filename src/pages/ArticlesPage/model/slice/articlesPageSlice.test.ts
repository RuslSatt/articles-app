import { DeepPartial } from '@reduxjs/toolkit';
import { ArticleSortField, ArticleType, ArticleView, IArticle } from '@/entities/article';
import { IArticlePageSchema } from '../types/articlesPage';
import { articlesPageReducer } from './articlesPageSlice';
import { fetchArticlesList } from '../services/fetchArticlesList/fetchArticlesList';

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
    blocks: []
};

const schema: IArticlePageSchema = {
    ids: ['1'],
    entities: { '1': data },
    isLoading: false,
    error: undefined,
    page: 1,
    hasMore: false,
    limit: 5,
    view: ArticleView.LIST,
    order: 'asc',
    sort: ArticleSortField.TITLE,
    search: '',
    type: ArticleType.ALL
};

describe('articlesPageSlice', () => {
    test('should fetch articles list', () => {
        const state: DeepPartial<IArticlePageSchema> = {
            ...schema,
            ids: [],
            entities: {},
            isLoading: true,
            error: 'error'
        };

        expect(
            articlesPageReducer(
                state as IArticlePageSchema,
                fetchArticlesList.fulfilled([data], '', {})
            )
        ).toEqual({
            ...schema,
            ids: ['1'],
            entities: { '1': data },
            isLoading: false,
            error: undefined
        });
    });
});
