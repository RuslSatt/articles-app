import { updateProfileData } from './updateProfileData';
import { TestAsyncThunk } from '@/shared/lib/tests/testAsyncThunk/testAsyncThunk';
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

describe('updateProfileData', () => {
    test('success update profile data', async () => {
        const TestThunk = new TestAsyncThunk(updateProfileData, {
            profile: {
                form: data
            }
        });
        TestThunk.api.put.mockReturnValue(Promise.resolve({ data }));
        const action = await TestThunk.callThunk();

        expect(TestThunk.api.put).toHaveBeenCalled();
        expect(action.meta.requestStatus).toBe('fulfilled');
        expect(action.payload).toEqual(data);
    });

    test('server error profile data', async () => {
        const TestThunk = new TestAsyncThunk(updateProfileData, {
            profile: {
                form: data
            }
        });

        TestThunk.api.put.mockReturnValue(Promise.resolve(null));
        const action = await TestThunk.callThunk();

        expect(action.meta.requestStatus).toBe('rejected');
        expect(action.payload).toEqual([ValidateProfileError.SERVER_ERROR]);
    });

    test('validate error profile data', async () => {
        const TestThunk = new TestAsyncThunk(updateProfileData, {
            profile: {
                form: { ...data, age: 0, first: '' }
            }
        });

        const action = await TestThunk.callThunk();

        expect(action.meta.requestStatus).toBe('rejected');
        expect(action.payload).toEqual([
            ValidateProfileError.INCORRECT_USER_DATA,
            ValidateProfileError.INCORRECT_AGE
        ]);
    });
});
