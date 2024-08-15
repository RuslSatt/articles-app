import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from '@/app/providers/store';
import { getLoginState } from './getLoginState';
import { initialState } from '../slice/loginSlice';

describe('getLoginState', () => {
    test('should return initial state', () => {
        const initialState = {
            username: 'admin',
            password: '123'
        };

        const state: DeepPartial<StateSchema> = {
            login: initialState
        };
        expect(getLoginState(state as StateSchema)).toEqual(initialState);
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginState(state as StateSchema)).toEqual(initialState);
    });
});
