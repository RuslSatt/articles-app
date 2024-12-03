import type { Meta, StoryObj } from '@storybook/react';
import { Listbox } from './ListBox';

const meta = {
    title: 'shared/Listbox',
    component: Listbox,
    parameters: {
        layout: 'centered'
    },

    tags: ['autodocs'],

    args: {}
} satisfies Meta<typeof Listbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        options: [
            {
                id: '1',
                value: '1',
                name: 'Option 1'
            },
            {
                id: '2',
                value: '2',
                name: 'Option 2'
            },
            {
                id: '3',
                value: '3',
                name: 'Option 3'
            }
        ],
        optionLabel: 'content'
    }
};
