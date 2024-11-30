import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from '@/app/providers/store';
import { IArticle } from '../types/article';
import {
    getArticleDetailsData,
    getArticleDetailsError,
    getArticleDetailsIsLoading
} from './articleDetails';
import { ArticleBlockType, ArticleType } from '../consts/consts';

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
            paragraphs: [
                'Программа, которую по традиции называют «Hello, world!».',
                'JavaScript — это язык, программы на котором можно выполнять',
                'Существуют и другие способы запуска JS-кода в браузере. '
            ]
        },
        {
            id: '8',
            type: ArticleBlockType.IMAGE,
            // eslint-disable-next-line max-len
            src: 'https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png',
            title: 'Рисунок 1 - скриншот сайта'
        },
        {
            id: '4',
            type: ArticleBlockType.CODE,
            code: '<!DOCTYPE html>\n<html>\n  <body>\n    <p id="hello"></p>\n\n'
        }
    ]
};

describe('getArticleDetailsData', () => {
    test('should return filled state', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetails: {
                data
            }
        };

        expect(getArticleDetailsData(state as StateSchema)).toEqual(state.articleDetails?.data);
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getArticleDetailsData(state as StateSchema)).toEqual(undefined);
    });
});

describe('getArticleDetailsIsLoading', () => {
    test('should work loading state', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetails: {
                isLoading: true
            }
        };
        expect(getArticleDetailsIsLoading(state as StateSchema)).toEqual(true);
    });
});

describe('getArticleDetailsError', () => {
    test('should work with error state', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetails: {
                error: 'error'
            }
        };
        expect(getArticleDetailsError(state as StateSchema)).toEqual('error');
    });
});
