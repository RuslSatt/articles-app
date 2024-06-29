import React, {FC, useState} from 'react';
import {LS_THEME_KEY, Theme, ThemeContext} from "../context/ThemeContext";

const defaultTheme = localStorage.getItem(LS_THEME_KEY) as Theme || Theme.LIGHT;

export const ThemeProvider: FC = ({children}) => {
    const [theme, setTheme] = useState<Theme>(defaultTheme);

    return (
        <ThemeContext.Provider value={{
            theme,
            setTheme: setTheme
        }}>
            {children}
        </ThemeContext.Provider>
    );
};
