import type { Meta, StoryObj } from '@storybook/react';
import { ArticleViewSelector } from './ArticleViewSelector';
import { StoreDecorator } from '@/shared/config/storybook/decorators/StoreDecorator';

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
    args: {}
};

Base.decorators = [StoreDecorator({})];
