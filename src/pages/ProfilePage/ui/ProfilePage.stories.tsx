import type { Meta, StoryObj } from '@storybook/react';
import { DeepPartial } from '@reduxjs/toolkit';
import ProfilePage from './ProfilePage';
import { StoreDecorator } from '@/shared/config/storybook/decorators/StoreDecorator';
import { StateSchema } from '@/app/providers/store';
import { Country } from '@/entities/countries';
import { Currency } from '@/entities/currency';

const meta = {
    title: 'pages/ProfilePage',
    component: ProfilePage,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs']
} satisfies Meta<typeof ProfilePage>;

export default meta;
type Story = StoryObj<typeof meta>;

const store: DeepPartial<StateSchema> = {
    profile: {
        form: {
            username: 'admin',
            age: 22,
            country: Country.UZBEKISTAN,
            lastname: 'Ivanov',
            first: 'Ivan',
            city: 'Minsk',
            currency: Currency.USD,
            avatar: 'https://pic.rutubelist.ru/user/3b/27/3b2758ad5492a76b578f7ee072e4e894.jpg'
        },
        isLoading: false,
        error: undefined,
        readonly: false
    }
};

export const Profile: Story = {
    args: {}
};

Profile.decorators = [StoreDecorator({ initialState: store })];
