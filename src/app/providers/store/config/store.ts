import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { StateSchema } from './schema';
import { userReducer } from '@/entities/user';
import { createReducerManager } from './reducerManager';

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

    const store = configureStore<StateSchema>({
        reducer: reducerManager.reduce,
        devTools: __IS_DEV__,
        preloadedState: initialState
    });

    // @ts-ignore
    store.reducerManager = reducerManager;

    return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
