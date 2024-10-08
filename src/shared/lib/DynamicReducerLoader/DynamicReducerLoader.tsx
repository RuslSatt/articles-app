import { FC, ReactNode, useEffect } from 'react';
import { Reducer } from '@reduxjs/toolkit';
import { useDispatch, useStore } from 'react-redux';
import { ReduxStoreWithManager, StateSchemaKey } from '@/app/providers/store';

export type ReducersList = {
    [name in StateSchemaKey]?: Reducer;
};

type ReducersListEntry = [StateSchemaKey, Reducer];

export interface ReducerLoaderProps {
    children: ReactNode;
    reducers: ReducersList;
    removeAfterUnmount?: boolean;
}

export const DynamicReducerLoader: FC<ReducerLoaderProps> = (props) => {
    const { children, reducers, removeAfterUnmount = true } = props;

    const store = useStore() as ReduxStoreWithManager;
    const dispatch = useDispatch();

    useEffect(() => {
        Object.entries(reducers).forEach(([name, reducer]) => {
            store.reducerManager.add(name as StateSchemaKey, reducer);
            dispatch({ type: `@INIT ${name} reducer` });
        });

        return () => {
            if (!removeAfterUnmount) return;

            Object.entries(reducers).forEach(([name]) => {
                store.reducerManager.remove(name as StateSchemaKey);
                dispatch({ type: `@DESTROY ${name} reducer` });
            });
        };
    }, []);

    return <>{children}</>;
};
