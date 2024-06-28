import React, {FC, useState} from 'react';
import {LS_THEME_KEY, Theme, ThemeContext} from "./ThemeContext";

const defaultTheme = localStorage.getItem(LS_THEME_KEY) as Theme || Theme.LIGHT;

const ThemeProvider: FC = ({children}) => {
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

export default ThemeProvider;
