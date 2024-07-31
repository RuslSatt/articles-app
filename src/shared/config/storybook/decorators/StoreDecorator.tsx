import { StoryFn } from '@storybook/react/*';
import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema, StoreProvider } from '@/app/providers/store';

export const StoreDecorator = (initialState: DeepPartial<StateSchema>) => (Story: StoryFn) => (
    <StoreProvider initialState={initialState as StateSchema}>
        <Story />
    </StoreProvider>
);
