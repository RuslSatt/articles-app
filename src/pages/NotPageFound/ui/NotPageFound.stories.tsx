import type { Meta, StoryObj } from '@storybook/react';
import { NotPageFound } from './NotPageFound';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { StoreDecorator } from '@/shared/config/storybook/decorators/StoreDecorator';

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

Default.decorators = [StoreDecorator({})];

export const Dark: Story = {
    args: {}
};

Dark.decorators = [StoreDecorator({}), ThemeDecorator(Theme.DARK)];
