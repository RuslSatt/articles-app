import type { Meta, StoryObj } from '@storybook/react';
import { NotPageFound } from './NotPageFound';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from '@/app/providers/theme';

const meta = {
    title: 'pages/NotPageFound',
    component: NotPageFound,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs']
} satisfies Meta<typeof NotPageFound>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {}
};

export const Dark: Story = {
    args: {}
};

Dark.decorators = [ThemeDecorator(Theme.DARK)];
