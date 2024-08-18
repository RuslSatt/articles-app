import { fetchProfileData } from './fetchProfileData';
import { TestAsyncThunk } from '@/shared/lib/tests/testAsyncThunk/testAsyncThunk';
import { Country } from '@/entities/countries';
import { Currency } from '@/entities/currency';

const data = {
    username: 'admin',
    age: 22,
    country: Country.UZBEKISTAN,
    lastname: 'Ivanov',
    first: 'Ivan',
    city: 'Minsk',
    currency: Currency.USD,
    avatar: ''
};

describe('fetchProfileData', () => {
    test('success fetch profile data', async () => {
        const TestThunk = new TestAsyncThunk(fetchProfileData);
        TestThunk.api.get.mockReturnValue(Promise.resolve({ data }));
        const action = await TestThunk.callThunk();

        expect(TestThunk.api.get).toHaveBeenCalled();
        expect(action.meta.requestStatus).toBe('fulfilled');
        expect(action.payload).toEqual(data);
    });

    test('error fetch profile data', async () => {
        const TestThunk = new TestAsyncThunk(fetchProfileData);
        TestThunk.api.get.mockReturnValue(Promise.resolve(null));
        const action = await TestThunk.callThunk();

        expect(action.meta.requestStatus).toBe('rejected');
    });
});
