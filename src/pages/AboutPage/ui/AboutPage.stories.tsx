import type { Meta, StoryObj } from '@storybook/react';
import AboutPage from './AboutPage';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from '@/app/providers/theme';

const meta = {
    title: 'pages/AboutPage',
    component: AboutPage,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs']
} satisfies Meta<typeof AboutPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {}
};

export const Dark: Story = {
    args: {}
};

Dark.decorators = [ThemeDecorator(Theme.DARK)];
