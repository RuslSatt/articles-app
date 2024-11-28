import { screen } from '@testing-library/react';
import { Action, Reducer } from '@reduxjs/toolkit';
import userEvent from '@testing-library/user-event';
import { renderComponent } from '@/shared/lib/tests/renderComponent/renderComponent';
import { Currency } from '@/entities/currency';
import { Country } from '@/entities/countries';
import { ProfileSchema } from '../../model/types/editableProfileCard';
import { profileReducer } from '../../model/slice/profileSlice';
import { EditableProfileCard } from './EditableProfileCard';
import { UserSchema } from '@/entities/user';

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

const user: UserSchema = {
    user: {
        id: '1',
        username: 'admin'
    }
};

const profile: ProfileSchema = {
    data: form,
    form,
    readonly: true
};

const options = {
    initialState: {
        profile,
        user
    },
    dynamicReducers: {
        profile: profileReducer as Reducer<ProfileSchema | undefined, Action>
    }
};

describe('Profile card component', () => {
    test('profile card render', () => {
        renderComponent(<EditableProfileCard paramId='1' />, options);

        expect(screen.getByTestId('profile-card')).toBeInTheDocument();
        expect(screen.getByTestId('profile-form')).toBeInTheDocument();
        expect(screen.getByTestId('profile-edit-button')).toBeInTheDocument();
    });

    test('start profile edit', async () => {
        renderComponent(<EditableProfileCard paramId='1' />, options);

        const editButton = screen.getByTestId('profile-edit-button');
        await userEvent.click(editButton);

        const saveButton = screen.getByTestId('profile-save-button');
        const cancelButton = screen.getByTestId('profile-cancel-button');

        expect(saveButton).toBeInTheDocument();
        expect(cancelButton).toBeInTheDocument();
    });

    test('cancel profile edit', async () => {
        renderComponent(<EditableProfileCard paramId='1' />, options);

        await userEvent.click(screen.getByTestId('profile-edit-button'));

        await userEvent.clear(screen.getByTestId('profile-first-name'));
        await userEvent.clear(screen.getByTestId('profile-last-name'));

        await userEvent.type(screen.getByTestId('profile-first-name'), 'Andrey');
        await userEvent.type(screen.getByTestId('profile-last-name'), 'Andreev');

        expect(screen.getByTestId('profile-first-name')).toHaveValue('Andrey');
        expect(screen.getByTestId('profile-last-name')).toHaveValue('Andreev');

        await userEvent.click(screen.getByTestId('profile-cancel-button'));

        expect(screen.getByTestId('profile-first-name')).toHaveValue('Ivan');
        expect(screen.getByTestId('profile-last-name')).toHaveValue('Ivanov');
    });

    // TODO Добавить моковый запрос

    // test('save profile edit', async () => {
    //     renderComponent(<EditableProfileCard paramId='1' />, options);

    //     await userEvent.click(screen.getByTestId('profile-edit-button'));

    //     await userEvent.clear(screen.getByTestId('profile-first-name'));
    //     await userEvent.clear(screen.getByTestId('profile-last-name'));

    //     await userEvent.type(screen.getByTestId('profile-first-name'), 'Andrey');
    //     await userEvent.type(screen.getByTestId('profile-last-name'), 'Andreev');

    //     await userEvent.click(screen.getByTestId('profile-save-button'));

    //     expect(screen.getByTestId('profile-first-name')).toHaveValue('Andrey');
    //     expect(screen.getByTestId('profile-last-name')).toHaveValue('Andreev');
    // });

    // test('validate profile edit', async () => {
    //     renderComponent(<EditableProfileCard paramId='1' />, options);

    //     await userEvent.click(screen.getByTestId('profile-edit-button'));

    //     await userEvent.clear(screen.getByTestId('profile-first-name'));
    //     await userEvent.clear(screen.getByTestId('profile-last-name'));

    //     await userEvent.type(screen.getByTestId('profile-first-name'), '');
    //     await userEvent.type(screen.getByTestId('profile-last-name'), 'Andreev');

    //     await userEvent.click(screen.getByTestId('profile-save-button'));

    //     const errorMessage = screen.getByTestId('profile-error-message');
    //     expect(errorMessage).toBeInTheDocument();
    // });
});
