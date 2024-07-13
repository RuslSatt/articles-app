import type { Meta, StoryObj } from '@storybook/react';
import { Navbar } from './Navbar';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from '@/app/providers/theme';

const meta = {
    title: 'widgets/Navbar',
    component: Navbar,
    parameters: {
        layout: 'centered'
    },

    tags: ['autodocs']
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {}
};

export const Dark: Story = {
    args: {}
};

Dark.decorators = [ThemeDecorator(Theme.DARK)];
