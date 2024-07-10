import { createContext } from 'react';

export enum Theme {
    LIGHT = 'light',
    DARK = 'dark'
}

export interface IContext {
    theme?: Theme;
    setTheme?: (theme: Theme) => void;
}

export const ThemeContext = createContext<IContext>({});

export const LS_THEME_KEY = 'theme';
