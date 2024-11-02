import type { Meta, StoryObj } from '@storybook/react';
import { ArticleViewSelector } from './ArticleViewSelector';
import { StoreDecorator } from '@/shared/config/storybook/decorators/StoreDecorator';
import { ArticleView } from '@/entities/article';

const meta = {
    title: 'feature/ArticleViewSelector',
    component: ArticleViewSelector,
    parameters: {
        layout: 'centered'
    },

    tags: ['autodocs'],

    args: {}
} satisfies Meta<typeof ArticleViewSelector>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
    args: {
        onChangeView: (view: ArticleView) => {}
    }
};

Base.decorators = [StoreDecorator({})];
