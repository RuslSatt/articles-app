import React, { FC } from 'react';
import { Provider } from 'react-redux';
import { DeepPartial, ReducersMapObject } from '@reduxjs/toolkit';
import { createReduxStore } from '../config/store';
import { StateSchema } from '../config/schema';

export interface StoreProviderProps {
    children: React.ReactNode;
    initialState?: DeepPartial<StateSchema>;
    dynamicReducers?: DeepPartial<ReducersMapObject<StateSchema>>;
}

export const StoreProvider: FC<StoreProviderProps> = (props) => {
    const { children, initialState, dynamicReducers } = props;

    const store = createReduxStore({
        initialState: initialState as StateSchema,
        dynamicReducers: dynamicReducers as ReducersMapObject<StateSchema>
    });

    return <Provider store={store}>{children}</Provider>;
};
