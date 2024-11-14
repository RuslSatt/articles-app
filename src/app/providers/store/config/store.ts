import { CombinedState, configureStore, Reducer, ReducersMapObject } from '@reduxjs/toolkit';
import { StateSchema } from './schema';
import { userReducer } from '@/entities/user';
import { createReducerManager } from './reducerManager';
import { api } from '@/shared/api/base';
import { saveScrollReducer } from '@/features/saveScroll';

export interface CreateReduxStoreProps {
    initialState?: StateSchema;
    dynamicReducers?: ReducersMapObject<StateSchema>;
}
export function createReduxStore(props: CreateReduxStoreProps) {
    const { initialState, dynamicReducers } = props;

    const rootReducers = {
        ...dynamicReducers,
        user: userReducer,
        saveScroll: saveScrollReducer
    };

    const reducerManager = createReducerManager(rootReducers);

    const store = configureStore({
        reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
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
