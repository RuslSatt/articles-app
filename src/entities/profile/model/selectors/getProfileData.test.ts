import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from '@/app/providers/store';
import { Country } from '@/entities/countries';
import { Currency } from '@/entities/currency';
import {
    getProfileData,
    getProfileError,
    getProfileForm,
    getProfileLoading,
    getProfileReadonly,
    getProfileValidateErrors
} from './getProfileData';
import { ValidateProfileError } from '../types/profile';

const data = {
    id: '1',
    username: 'admin',
    age: 22,
    country: Country.UZBEKISTAN,
    lastname: 'Ivanov',
    first: 'Ivan',
    city: 'Minsk',
    currency: Currency.USD,
    avatar: ''
};

describe('getProfileData', () => {
    test('should return filled state', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                data
            }
        };

        expect(getProfileData(state as StateSchema)).toEqual(state.profile?.data);
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileData(state as StateSchema)).toEqual(undefined);
    });
});

describe('getProfileForm', () => {
    test('should return filled state', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                form: data
            }
        };

        expect(getProfileForm(state as StateSchema)).toEqual(state.profile?.form);
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileForm(state as StateSchema)).toEqual(undefined);
    });
});

describe('getProfileError', () => {
    test('should return filled state', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                error: 'error'
            }
        };

        expect(getProfileError(state as StateSchema)).toEqual(state.profile?.error);
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileError(state as StateSchema)).toEqual(undefined);
    });
});

describe('getProfileLoading', () => {
    test('should return filled state', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                isLoading: true
            }
        };

        expect(getProfileLoading(state as StateSchema)).toEqual(state.profile?.isLoading);
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileLoading(state as StateSchema)).toEqual(undefined);
    });
});

describe('getProfileReadonly', () => {
    test('should return filled state', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                readonly: false
            }
        };

        expect(getProfileReadonly(state as StateSchema)).toEqual(state.profile?.readonly);
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileReadonly(state as StateSchema)).toEqual(undefined);
    });
});

describe('getProfileValidateErrors', () => {
    test('should return filled state', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                validateErrors: [ValidateProfileError.INCORRECT_CITY]
            }
        };

        expect(getProfileValidateErrors(state as StateSchema)).toEqual(
            state.profile?.validateErrors
        );
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileValidateErrors(state as StateSchema)).toEqual(undefined);
    });
});
