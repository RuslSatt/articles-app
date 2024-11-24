import type { Meta, StoryObj } from '@storybook/react';
import { Flex } from './Flex';

const meta = {
    title: 'shared/Flex',
    component: Flex,
    parameters: {
        layout: 'centered'
    },

    tags: ['autodocs'],
    args: {}
} satisfies Meta<typeof Flex>;

export default meta;
type Story = StoryObj<typeof meta>;

const children = (
    <>
        <div
            style={{
                width: '100px',
                height: '100px',
                background: 'red',
                border: '1px solid black'
            }}
        />
        <div
            style={{
                width: '100px',
                height: '100px',
                background: 'red',
                border: '1px solid black'
            }}
        />
        <div
            style={{
                width: '100px',
                height: '100px',
                background: 'red',
                border: '1px solid black'
            }}
        />
        <div
            style={{
                width: '100px',
                height: '100px',
                background: 'red',
                border: '1px solid black'
            }}
        />
    </>
);

export const Row: Story = {
    args: {
        children
    }
};

export const Column: Story = {
    args: {
        children,
        direction: 'column'
    }
};

export const Gap: Story = {
    args: {
        children,
        gap: '15'
    }
};
