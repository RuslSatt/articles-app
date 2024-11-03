import type { Meta, StoryObj } from '@storybook/react';
import { SelectButton } from './SelectButton';

const meta = {
    title: 'shared/SelectButton',
    component: SelectButton,
    parameters: {
        layout: 'centered'
    },

    tags: ['autodocs'],
    args: {}
} satisfies Meta<typeof SelectButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {
        options: [
            { value: '1', content: 'Option 1' },
            { value: '2', content: 'Option 2' }
        ],
        optionLabel: 'content',
        gap: 10,
        value: '2'
    }
};
