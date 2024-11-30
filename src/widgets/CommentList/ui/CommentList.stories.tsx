import type { Meta, StoryObj } from '@storybook/react';
import { CommentList } from './CommentList';
import { StoreDecorator } from '@/shared/config/storybook/decorators/StoreDecorator';

const meta = {
    title: 'widgets/CommentList',
    component: CommentList,
    parameters: {
        layout: 'centered'
    },

    tags: ['autodocs']
} satisfies Meta<typeof CommentList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        id: '1'
    }
};

Default.parameters = {
    mockData: [
        {
            url: `${__API__}/comments?articleId=1&_expand=user`,
            method: 'GET',
            status: 200,
            response: [
                {
                    id: '1',
                    text: 'text',
                    user: {
                        id: '1',
                        username: 'username'
                    }
                }
            ]
        }
    ]
};

Default.decorators = [StoreDecorator({})];
