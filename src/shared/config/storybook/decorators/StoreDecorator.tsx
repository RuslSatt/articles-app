import { StoryFn } from '@storybook/react/*';
import { DeepPartial, ReducersMapObject } from '@reduxjs/toolkit';
import { StateSchema, StoreProvider } from '@/app/providers/store';
import { loginReducer } from '@/feature/login/model/slice/loginSlice';
import { ReducersList } from '@/shared/lib/DynamicReducerLoader/DynamicReducerLoader';

const defaultDynamicReducers: ReducersList = {
    login: loginReducer
};

export interface StoreDecoratorOptions {
    initialState?: DeepPartial<StateSchema>;
    dynamicReducers?: DeepPartial<ReducersMapObject<StateSchema>>;
}

export const StoreDecorator = (options: StoreDecoratorOptions) => (Story: StoryFn) => (
    <StoreProvider
        initialState={options.initialState as StateSchema}
        dynamicReducers={
            {
                ...defaultDynamicReducers,
                ...options.dynamicReducers
            } as ReducersMapObject<StateSchema>
        }
    >
        <Story />
    </StoreProvider>
);
