import { StoryFn } from '@storybook/react/*';
import { DeepPartial, ReducersMapObject } from '@reduxjs/toolkit';
import { StateSchema, StoreProvider } from '@/app/providers/store';
import { loginReducer } from '@/features/login/model/slice/loginSlice';
import { ReducersList } from '@/shared/lib/DynamicReducerLoader/DynamicReducerLoader';
import { profileReducer } from '@/entities/profile';
import { articleDetailsReducer } from '@/entities/article';

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
