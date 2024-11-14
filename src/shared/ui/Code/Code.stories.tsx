import type { Meta, StoryObj } from '@storybook/react';
import { Code } from './Code';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from '@/app/providers/theme';

const meta = {
    title: 'shared/Code',
    component: Code,
    parameters: {
        layout: 'centered'
    },

    tags: ['autodocs']
} satisfies Meta<typeof Code>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        text: '<!DOCTYPE html>\n<html>\n  <body>\n    <p id="hello"></p>\n\n;'
    }
};

export const Text: Story = {
    args: {
        text: '<!DOCTYPE html>\n<html>\n  <body>\n    <p id="hello"></p>\n\n;'
    }
};

export const Dark: Story = {
    args: {
        text: '<!DOCTYPE html>\n<html>\n  <body>\n    <p id="hello"></p>\n\n;'
    }
};

Dark.decorators = [ThemeDecorator(Theme.DARK)];
