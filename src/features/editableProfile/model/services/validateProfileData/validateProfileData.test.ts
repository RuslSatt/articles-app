import { validateProfileData } from './validateProfileData';
import { Country } from '@/entities/countries';
import { Currency } from '@/entities/currency';
import { ValidateProfileError } from '../../types/editableProfileCard';

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

describe('validateProfileData', () => {
    test('success validate profile data', async () => {
        const result = validateProfileData(data);

        expect(result).toEqual([]);
    });

    test('error validate first name', async () => {
        const result = validateProfileData({ ...data, first: '' });

        expect(result).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
    });

    test('error validate age', async () => {
        const result = validateProfileData({ ...data, age: 0 });

        expect(result).toEqual([ValidateProfileError.INCORRECT_AGE]);
    });

    test('error validate country', async () => {
        const result = validateProfileData({ ...data, country: undefined });

        expect(result).toEqual([ValidateProfileError.INCORRECT_COUNTRY]);
    });

    test('error validate city', async () => {
        const result = validateProfileData({ ...data, city: '' });

        expect(result).toEqual([ValidateProfileError.INCORRECT_CITY]);
    });
});
