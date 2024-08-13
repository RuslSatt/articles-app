import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { StateSchema } from './schema';
import { userReducer } from '@/entities/user';
import { createReducerManager } from './reducerManager';
import { api } from '@/shared/api/base';

export interface CreateReduxStoreProps {
    initialState?: StateSchema;
    dynamicReducers?: ReducersMapObject<StateSchema>;
}
export function createReduxStore(props: CreateReduxStoreProps) {
    const { initialState, dynamicReducers } = props;

    const rootReducers = {
        ...dynamicReducers,
        user: userReducer
    };

    const reducerManager = createReducerManager(rootReducers);

    const store = configureStore({
        reducer: reducerManager.reduce,
        devTools: __IS_DEV__,
        preloadedState: initialState,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                thunk: {
                    extraArgument: {
                        api
                    }
                }
            })
    });

    // @ts-ignore
    store.reducerManager = reducerManager;

    return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
