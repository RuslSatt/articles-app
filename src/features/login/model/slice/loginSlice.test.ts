import { DeepPartial } from '@reduxjs/toolkit';
import { LoginSchema } from '../types/login';
import { loginActions, loginReducer } from './loginSlice';

describe('loginSlice', () => {
    test('should change username', () => {
        const state: DeepPartial<LoginSchema> = {
            username: 'admin'
        };

        expect(loginReducer(state as LoginSchema, loginActions.setUsername('123'))).toEqual({
            username: '123'
        });
    });

    test('should change password', () => {
        const state: DeepPartial<LoginSchema> = {
            password: '123'
        };

        expect(loginReducer(state as LoginSchema, loginActions.setPassword('admin'))).toEqual({
            password: 'admin'
        });
    });
});
