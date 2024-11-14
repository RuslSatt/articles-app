import { FC, ReactNode, useEffect } from 'react';
import { Reducer } from '@reduxjs/toolkit';
import { useDispatch, useStore } from 'react-redux';
import { ReduxStoreWithManager, StateSchema, StateSchemaKey } from '@/app/providers/store';

export type ReducersList = {
    [name in StateSchemaKey]?: Reducer<NonNullable<StateSchema[name]>>;
};

export interface ReducerLoaderProps {
    children: ReactNode;
    reducersList: ReducersList;
    removeAfterUnmount?: boolean;
}

export const DynamicReducerLoader: FC<ReducerLoaderProps> = (props) => {
    const { children, reducersList, removeAfterUnmount = true } = props;

    const store = useStore() as ReduxStoreWithManager;
    const dispatch = useDispatch();

    useEffect(() => {
        const reducers = store.reducerManager.getReducerMap();

        Object.entries(reducersList).forEach(([name, reducer]) => {
            if (!reducers[name as StateSchemaKey]) {
                store.reducerManager.add(name as StateSchemaKey, reducer);
                dispatch({ type: `@INIT ${name} reducer` });
            }
        });

        return () => {
            if (!removeAfterUnmount) return;

            Object.entries(reducersList).forEach(([name]) => {
                store.reducerManager.remove(name as StateSchemaKey);
                dispatch({ type: `@DESTROY ${name} reducer` });
            });
        };
    }, []);

    return <>{children}</>;
};
