import type { Meta, StoryObj } from '@storybook/react';
import { Message, Severity } from './Message';

const meta = {
    title: 'shared/Message',
    component: Message,
    parameters: {
        layout: 'centered'
    },

    tags: ['autodocs']
} satisfies Meta<typeof Message>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Success: Story = {
    args: {
        severity: Severity.SUCCESS,
        text: 'Success message'
    }
};

export const Error: Story = {
    args: {
        severity: Severity.ERROR,
        text: 'Error message'
    }
};

export const Warning: Story = {
    args: {
        severity: Severity.WARNING,
        text: 'Warning message'
    }
};

export const Info: Story = {
    args: {
        severity: Severity.INFO,
        text: 'Info message'
    }
};
