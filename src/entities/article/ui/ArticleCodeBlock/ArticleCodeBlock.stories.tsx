import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from '@/app/providers/theme';
import { ArticleCodeBlock } from './ArticleCodeBlock';
import { ArticleBlockType } from '../../model/types/article';

const meta = {
    title: 'entities/ArticleCodeBlock',
    component: ArticleCodeBlock,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs']
} satisfies Meta<typeof ArticleCodeBlock>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        content: {
            id: '1',
            code: 'console.log(123);',
            type: ArticleBlockType.CODE
        }
    }
};

export const Dark: Story = {
    args: {
        content: {
            id: '1',
            code: 'console.log(123);',
            type: ArticleBlockType.CODE
        }
    }
};

Dark.decorators = [ThemeDecorator(Theme.DARK)];
