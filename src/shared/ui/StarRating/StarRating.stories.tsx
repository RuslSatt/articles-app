import type { Meta, StoryObj } from '@storybook/react';
import { StarRating } from './StarRating';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

const meta = {
    title: 'shared/StarRating',
    component: StarRating,
    parameters: {
        layout: 'centered'
    },

    tags: ['autodocs'],
    args: {}
} satisfies Meta<typeof StarRating>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {}
};

export const Circle: Story = {
    args: {}
};

Circle.decorators = [ThemeDecorator(Theme.DARK)];
