import type { Meta, StoryObj } from '@storybook/react';
import { Dropdown } from './Dropdown';

const meta = {
    title: 'shared/Dropdown',
    component: Dropdown,
    parameters: {
        layout: 'centered'
    },

    tags: ['autodocs'],

    args: {}
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        items: [
            {
                id: '1',

                name: 'Option 1'
            },
            {
                id: '2',

                name: 'Option 2'
            },
            {
                id: '3',

                name: 'Option 3'
            }
        ],
        trigger: 'Dropdown'
    }
};
