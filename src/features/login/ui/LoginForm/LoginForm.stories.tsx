import type { Meta, StoryObj } from '@storybook/react';
import { DeepPartial } from '@reduxjs/toolkit';
import LoginForm from './LoginForm';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { StoreDecorator } from '@/shared/config/storybook/decorators/StoreDecorator';
import { StateSchema } from '@/app/providers/store';

const meta = {
    title: 'feature/LoginForm',
    component: LoginForm,
    parameters: {
        layout: 'centered'
    },

    tags: ['autodocs'],

    args: {
        onSuccess: () => {}
    }
} satisfies Meta<typeof LoginForm>;

export default meta;
type Story = StoryObj<typeof meta>;

const store: DeepPartial<StateSchema> = {
    login: {
        username: 'admin',
        password: '123'
    }
};

export const Login: Story = {
    args: {}
};

Login.decorators = [StoreDecorator({ initialState: store })];

export const LoginDark: Story = {
    args: {}
};

LoginDark.decorators = [StoreDecorator({ initialState: store }), ThemeDecorator(Theme.DARK)];
