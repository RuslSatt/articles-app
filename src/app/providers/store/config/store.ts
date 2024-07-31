import { configureStore } from '@reduxjs/toolkit';
import { StateSchema } from './schema';
import { userReducer } from '@/entities/user';
import { authReducer } from '@/feature/login';
import { createReducerManager } from './reducerManager';

export function createReduxStore(initialState?: StateSchema) {
    const rootReducers = {
        user: userReducer,
        login: authReducer
    };

    const reducerManager = createReducerManager(rootReducers);

    const store = configureStore<StateSchema>({
        reducer: rootReducers,
        devTools: __IS_DEV__,
        preloadedState: initialState
    });

    // @ts-ignore
    store.reducerManager = reducerManager;

    return store;
}
