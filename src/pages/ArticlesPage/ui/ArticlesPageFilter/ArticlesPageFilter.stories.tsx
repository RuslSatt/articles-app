import type { Meta, StoryObj } from '@storybook/react';
import { ArticlesPageFilter } from './ArticlesPageFilter';
import { StoreDecorator } from '@/shared/config/storybook/decorators/StoreDecorator';

const meta = {
    title: 'pages/ArticlesPageFilter',
    component: ArticlesPageFilter,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs']
} satisfies Meta<typeof ArticlesPageFilter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {}
};

Default.decorators = [StoreDecorator({})];
