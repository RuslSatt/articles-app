import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from '@/app/providers/theme';
import { ArticleImageBlock } from './ArticleImageBlock';
import { ArticleBlockType } from '../../model/types/article';

const meta = {
    title: 'entities/ArticleImageBlock',
    component: ArticleImageBlock,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs']
} satisfies Meta<typeof ArticleImageBlock>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        content: {
            id: '1',
            title: 'title',
            src: 'src',
            type: ArticleBlockType.IMAGE
        }
    }
};

export const Dark: Story = {
    args: {
        content: {
            id: '1',
            title: 'title',
            src: 'src',
            type: ArticleBlockType.IMAGE
        }
    }
};

Dark.decorators = [ThemeDecorator(Theme.DARK)];
