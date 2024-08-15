import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from '@/app/providers/store';
import { loginByUsername } from './loginByUsername';
import { userActions } from '@/entities/user';
import { TestAsyncThunk } from '@/shared/lib/tests/testAsyncThunk/testAsyncThunk';

const state: DeepPartial<StateSchema> = {
    login: {
        username: 'admin',
        password: '123'
    }
};

describe('loginByUsername', () => {
    test('success login', async () => {
        const user = { username: '123', id: '1' };

        const TestThunk = new TestAsyncThunk(loginByUsername, state);
        TestThunk.api.post.mockReturnValue(Promise.resolve({ data: user }));
        const action = await TestThunk.callThunk();

        expect(TestThunk.dispatch).toHaveBeenCalledWith(userActions.setUser(user));
        expect(TestThunk.dispatch).toHaveBeenCalledTimes(3);
        expect(action.meta.requestStatus).toBe('fulfilled');
        expect(action.payload).toEqual(user);
    });

    test('error login', async () => {
        const TestThunk = new TestAsyncThunk(loginByUsername, state);
        TestThunk.api.post.mockReturnValue(Promise.reject(new Error('user not found')));
        const action = await TestThunk.callThunk();

        expect(TestThunk.dispatch).toHaveBeenCalledTimes(2);
        expect(action.meta.requestStatus).toBe('rejected');
    });
});
