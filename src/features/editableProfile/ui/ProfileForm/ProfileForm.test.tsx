import { screen } from '@testing-library/react';
import { Action, Reducer } from '@reduxjs/toolkit';
import { renderComponent } from '@/shared/lib/tests/renderComponent/renderComponent';
import { ProfileForm } from './ProfileForm';
import { Currency } from '@/entities/currency';
import { Country } from '@/entities/countries';
import { profileReducer } from '../../model/slice/profileSlice';
import { ProfileSchema } from '../../model/types/editableProfileCard';

const form = {
    id: '1',
    username: 'admin',
    age: 22,
    country: Country.UZBEKISTAN,
    lastname: 'Ivanov',
    first: 'Ivan',
    city: 'Minsk',
    currency: Currency.USD,
    avatar: 'https://pic.rutubelist.ru/user/3b/27/3b2758ad5492a76b578f7ee072e4e894.jpg'
};

describe('Profile form component', () => {
    test('profile form render', () => {
        renderComponent(<ProfileForm data={form} />, {
            initialState: {
                profile: {
                    form
                }
            },
            dynamicReducers: {
                profile: profileReducer as Reducer<ProfileSchema | undefined, Action>
            }
        });
        expect(screen.getByTestId('profile-form')).toBeInTheDocument();
    });
});
