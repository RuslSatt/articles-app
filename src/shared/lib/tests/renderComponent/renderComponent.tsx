import { render } from '@testing-library/react';
import { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import { MemoryRouter } from 'react-router-dom';
import { DeepPartial, ReducersMapObject } from '@reduxjs/toolkit';
import i18n from '@/shared/config/i18n/i18nTest';
import { StateSchema, StoreProvider } from '@/app/providers/store';

export interface RenderComponentOptions {
    route?: string;
    initialState?: DeepPartial<StateSchema>;
    dynamicReducers?: DeepPartial<ReducersMapObject<StateSchema>>;
}

export function renderComponent(component: ReactNode, options: RenderComponentOptions = {}) {
    const { route = '/', initialState, dynamicReducers } = options;

    return render(
        <StoreProvider dynamicReducers={dynamicReducers} initialState={initialState as StateSchema}>
            <MemoryRouter initialEntries={[route]}>
                <I18nextProvider i18n={i18n}>{component}</I18nextProvider>
            </MemoryRouter>
        </StoreProvider>
    );
}
