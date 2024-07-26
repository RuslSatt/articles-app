import { configureStore } from '@reduxjs/toolkit';
import { StateSchema } from './schema';
import { userReducer } from '@/entities/user';

export function createReduxStore(initialState?: StateSchema) {
    return configureStore<StateSchema>({
        reducer: {
            user: userReducer
        },
        devTools: __IS_DEV__,
        preloadedState: initialState
    });
}
