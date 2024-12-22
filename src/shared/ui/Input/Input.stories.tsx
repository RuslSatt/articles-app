import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Input } from './Input';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

const meta = {
    title: 'shared/Input',
    component: Input,
    parameters: {
        layout: 'centered'
    },

    tags: ['autodocs'],

    args: { onClick: fn() }
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const InputText: Story = {
    args: {
        type: 'text',
        value: 'text'
    }
};

export const InputFocus: Story = {
    args: {
        type: 'text',
        autofocus: true
    }
};

export const InputPassword: Story = {
    args: {
        type: 'password',
        value: 'password'
    }
};

InputPassword.decorators = [ThemeDecorator(Theme.DARK)];
