import type { Meta, StoryObj } from '@storybook/react';
import ProfilePage from './ProfilePage';
import { StoreDecorator } from '@/shared/config/storybook/decorators/StoreDecorator';

const meta = {
    title: 'pages/ProfilePage',
    component: ProfilePage,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs']
} satisfies Meta<typeof ProfilePage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Profile: Story = {
    args: {}
};

Profile.decorators = [StoreDecorator({})];
