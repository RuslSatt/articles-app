import type { Meta, StoryObj } from '@storybook/react';
import { Skeleton } from './Skeleton';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from '@/app/providers/theme';

const meta = {
    title: 'shared/Skeleton',
    component: Skeleton,
    parameters: {
        layout: 'centered'
    },

    tags: ['autodocs'],
    args: {}
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {
        width: 100,
        height: 100,
        borderRadius: '10px'
    }
};

export const Circle: Story = {
    args: {
        width: 100,
        height: 100,
        borderRadius: '50%'
    }
};

Circle.decorators = [ThemeDecorator(Theme.DARK)];
