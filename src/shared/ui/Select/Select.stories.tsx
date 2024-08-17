import type { Meta, StoryObj } from '@storybook/react';
import { Select } from './Select';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from '@/app/providers/theme';

const meta = {
    title: 'shared/Select',
    component: Select,
    parameters: {
        layout: 'centered'
    },

    tags: ['autodocs'],
    args: {
        options: [
            { value: '1', content: 'Option 1' },
            { value: '2', content: 'Option 2' }
        ],
        optionLabel: 'content'
    }
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {}
};

export const Dark: Story = {
    args: {}
};

Dark.decorators = [ThemeDecorator(Theme.DARK)];
