import React, { FC } from 'react';
import { Provider } from 'react-redux';
import { ReducersMapObject } from '@reduxjs/toolkit';
import { createReduxStore } from '../config/store';
import { StateSchema } from '../config/schema';

export interface StoreProviderProps {
    children: React.ReactNode;
    initialState?: StateSchema;
    dynamicReducers?: ReducersMapObject<StateSchema>;
}

export const StoreProvider: FC<StoreProviderProps> = (props) => {
    const { children, initialState, dynamicReducers } = props;

    const store = createReduxStore({
        initialState,
        dynamicReducers
    });

    return <Provider store={store}>{children}</Provider>;
};
