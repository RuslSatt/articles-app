import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from '@/app/providers/theme';
import { ArticleTextBlock } from './ArticleTextBlock';
import { ArticleBlockType } from '../../model/types/article';

const meta = {
    title: 'entities/ArticleTextBlock',
    component: ArticleTextBlock,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs']
} satisfies Meta<typeof ArticleTextBlock>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        content: {
            id: '1',
            paragraphs: ['text'],
            type: ArticleBlockType.TEXT
        }
    }
};

export const Dark: Story = {
    args: {
        content: {
            id: '1',
            paragraphs: ['text'],
            type: ArticleBlockType.TEXT
        }
    }
};

Dark.decorators = [ThemeDecorator(Theme.DARK)];
