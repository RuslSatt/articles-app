import React, { FC, useMemo, useState } from 'react';
import { LS_THEME_KEY, Theme, ThemeContext } from '../context/ThemeContext';

const defaultTheme = (localStorage.getItem(LS_THEME_KEY) as Theme) || Theme.LIGHT;

export interface ThemeProviderProps {
    children: React.ReactNode;
    initialTheme?: Theme;
}

export const ThemeProvider: FC<ThemeProviderProps> = (props) => {
    const { children, initialTheme } = props;

    const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme);

    const defaultProps = useMemo(
        () => ({
            theme,
            setTheme
        }),
        [theme]
    );

    return <ThemeContext.Provider value={defaultProps}>{children}</ThemeContext.Provider>;
};
