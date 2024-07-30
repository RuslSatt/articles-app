import { configureStore } from '@reduxjs/toolkit';
import { StateSchema } from './schema';
import { userReducer } from '@/entities/user';
import { authReducer } from '@/feature/login';

export function createReduxStore(initialState?: StateSchema) {
    return configureStore<StateSchema>({
        reducer: {
            user: userReducer,
            login: authReducer
        },
        devTools: __IS_DEV__,
        preloadedState: initialState
    });
}
