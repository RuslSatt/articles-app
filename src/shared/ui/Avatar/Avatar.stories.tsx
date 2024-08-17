import type { Meta, StoryObj } from '@storybook/react';
import { Avatar, AvatarSize } from './Avatar';
// @ts-ignore
import AvatarImage from './avatar-storybook.jpg';

const meta = {
    title: 'shared/Avatar',
    component: Avatar,
    parameters: {
        layout: 'centered'
    },

    tags: ['autodocs']
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {
        size: AvatarSize.NORMAL,
        image: AvatarImage
    }
};

export const Small: Story = {
    args: {
        size: AvatarSize.SMALL,
        image: AvatarImage
    }
};

export const Large: Story = {
    args: {
        size: AvatarSize.LARGE,
        image: AvatarImage
    }
};
