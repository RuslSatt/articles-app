import type { Meta, StoryObj } from '@storybook/react';
import { ProfileCard } from './ProfileCard';
import { StoreDecorator } from '@/shared/config/storybook/decorators/StoreDecorator';
import { Country } from '@/entities/countries';
import { Currency } from '@/entities/currency';
import { ProfileEditButton, ProfileForm } from '@/features/profile';
import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from '@/app/providers/store';
import { ValidateProfileError } from '../model/types/profile';

const meta = {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs']
} satisfies Meta<typeof ProfileCard>;

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
        readonly: true,
        validateErrors: [ValidateProfileError.INCORRECT_USER_DATA]
    }
};

export const Default: Story = {
    args: {
        data: store.profile?.form,
        form: <ProfileForm data={store.profile?.form} />,
        editButton: <ProfileEditButton />
    }
};

Default.decorators = [StoreDecorator({ initialState: store })];
