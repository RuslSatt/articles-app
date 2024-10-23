import type { Meta, StoryObj } from '@storybook/react';
import { DeepPartial } from '@reduxjs/toolkit';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from '@/app/providers/theme';
import { ArticleDetails } from './ArticleDetails';
import { StoreDecorator } from '@/shared/config/storybook/decorators/StoreDecorator';
import { ArticleBlockType, ArticleType } from '../../model/types/article';
import { StateSchema } from '@/app/providers/store';

const meta = {
    title: 'entities/ArticleDetails',
    component: ArticleDetails,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs']
} satisfies Meta<typeof ArticleDetails>;

export default meta;
type Story = StoryObj<typeof meta>;

const initialState: DeepPartial<StateSchema> = {
    articleDetails: {
        data: {
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
        }
    }
};

export const Default: Story = {
    args: {
        id: '1'
    }
};

Default.decorators = [
    StoreDecorator({
        initialState
    })
];

export const Dark: Story = {
    args: {
        id: '1'
    }
};

Dark.decorators = [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
        initialState
    })
];

export const Loading: Story = {
    args: {
        id: '1'
    }
};

Loading.decorators = [
    StoreDecorator({
        initialState: {
            articleDetails: {
                isLoading: true
            }
        }
    })
];

export const Error: Story = {
    args: {
        id: '1'
    }
};

Error.decorators = [
    StoreDecorator({
        initialState: {
            articleDetails: {
                error: 'error'
            }
        }
    })
];
