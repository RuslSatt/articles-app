import type { Meta, StoryObj } from '@storybook/react';
import { AppImage } from './AppImage';

const meta = {
    title: 'shared/AppImage',
    component: AppImage,
    parameters: {
        layout: 'centered'
    },
    args: {
        children: 'Link'
    },
    tags: ['autodocs']
} satisfies Meta<typeof AppImage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {}
};
