import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Button } from './Button';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

const meta = {
    title: 'shared/Button',
    component: Button,
    parameters: {
        layout: 'centered'
    },

    tags: ['autodocs'],

    args: { onClick: fn() }
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        label: 'Button'
    }
};

export const Text: Story = {
    args: {
        text: true,
        label: 'Button'
    }
};

export const Dark: Story = {
    args: {
        label: 'Button'
    }
};

Dark.decorators = [ThemeDecorator(Theme.DARK)];
