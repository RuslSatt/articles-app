import { DeepPartial } from '@reduxjs/toolkit';
import { profileActions, profileReducer } from './profileSlice';
import { Country } from '@/entities/countries';
import { Currency } from '@/entities/currency';
import { fetchProfileData } from '../services/fetchProfileData/fetchProfileData';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';
import { IProfile } from '@/entities/profile';
import { ProfileSchema, ValidateProfileError } from '../types/editableProfileCard';

const data: IProfile = {
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

describe('profileSlice', () => {
    test('should change profile data', () => {
        const state: DeepPartial<ProfileSchema> = {
            form: data
        };

        expect(
            profileReducer(
                state as ProfileSchema,
                profileActions.setProfileData({
                    ...data,
                    username: 'Serg_2',
                    age: 35,
                    first: 'Sergey'
                })
            )
        ).toEqual({ form: { ...data, username: 'Serg_2', age: 35, first: 'Sergey' } });
    });

    test('should change readonly mode', () => {
        const state: DeepPartial<ProfileSchema> = {
            form: data,
            readonly: true
        };

        expect(profileReducer(state as ProfileSchema, profileActions.setReadonly(false))).toEqual({
            ...state,
            readonly: false
        });
    });

    test('should cancel edit profile', () => {
        const state: DeepPartial<ProfileSchema> = {
            data,
            form: data,
            readonly: false,
            validateErrors: [ValidateProfileError.INCORRECT_AGE]
        };

        expect(profileReducer(state as ProfileSchema, profileActions.cancelEdit())).toEqual({
            ...state,
            readonly: true,
            validateErrors: undefined
        });
    });

    test('should fetch profile data', () => {
        const state: DeepPartial<ProfileSchema> = {
            data: undefined,
            form: undefined,
            isLoading: true,
            error: 'error'
        };

        expect(
            profileReducer(state as ProfileSchema, fetchProfileData.fulfilled(data, '', '1'))
        ).toEqual({
            data,
            form: data,
            isLoading: false,
            error: undefined
        });
    });

    test('should update profile data', () => {
        const state: DeepPartial<ProfileSchema> = {
            data: { ...data, age: 0 },
            form: data,
            isLoading: true,
            readonly: false,
            validateErrors: [ValidateProfileError.INCORRECT_AGE]
        };

        expect(
            profileReducer(state as ProfileSchema, updateProfileData.fulfilled(data, ''))
        ).toEqual({
            data,
            form: data,
            isLoading: false,
            readonly: true,
            validateErrors: undefined
        });
    });
});
