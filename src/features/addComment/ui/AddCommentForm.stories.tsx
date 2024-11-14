import type { Meta, StoryObj } from '@storybook/react';
import AddCommentForm from './AddCommentForm';
import { StoreDecorator } from '@/shared/config/storybook/decorators/StoreDecorator';

const meta = {
    title: 'feature/AddCommentForm',
    component: AddCommentForm,
    parameters: {
        layout: 'centered'
    },

    tags: ['autodocs'],

    args: {}
} satisfies Meta<typeof AddCommentForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
    args: {
        onSendComment: () => {
            console.log('onSendComment');
        }
    }
};

Base.decorators = [StoreDecorator({})];
