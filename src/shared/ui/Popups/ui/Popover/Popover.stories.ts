import type { Meta, StoryObj } from '@storybook/react';
import { Popover } from './Popover';

const meta = {
    title: 'shared/Popover',
    component: Popover,
    parameters: {
        layout: 'centered'
    },

    tags: ['autodocs'],

    args: {}
} satisfies Meta<typeof Popover>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        trigger: 'Popover',
        children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, expedita.'
    }
};
