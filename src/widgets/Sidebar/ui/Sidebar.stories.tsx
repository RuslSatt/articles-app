import type { Meta, StoryObj } from '@storybook/react';
import { Sidebar } from './Sidebar';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from '@/app/providers/theme';
import { StoreDecorator } from '@/shared/config/storybook/decorators/StoreDecorator';

const meta = {
    title: 'widgets/Sidebar',
    component: Sidebar,
    parameters: {
        layout: 'centered'
    },

    tags: ['autodocs']
} satisfies Meta<typeof Sidebar>;

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
