import { StoryFn } from '@storybook/react/*';
import { DeepPartial, ReducersMapObject } from '@reduxjs/toolkit';
import { StateSchema, StoreProvider } from '@/app/providers/store';
import { ReducersList } from '@/shared/lib/components/DynamicReducerLoader/DynamicReducerLoader';
import { profileReducer } from '@/features/editableProfile';
import { articleDetailsReducer } from '@/entities/article';
import { loginReducer } from '@/features/login';

const defaultDynamicReducers: ReducersList = {
    login: loginReducer,
    profile: profileReducer,
    articleDetails: articleDetailsReducer
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
