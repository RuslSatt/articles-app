import type { Meta, StoryObj } from '@storybook/react';
import { CommentCard } from './CommentCard';

const meta = {
    title: 'entities/CommentCard',
    component: CommentCard,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs']
} satisfies Meta<typeof CommentCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        comment: {
            id: '1',
            text: 'test comment',
            user: {
                id: '1',
                username: 'admin',
                avatar: 'https://pic.rutubelist.ru/user/3b/27/3b2758ad5492a76b578f7ee072e4e894.jpg'
            },
            articleId: '1',
            createdAt: new Date(),
            updatedAt: new Date()
        }
    }
};
