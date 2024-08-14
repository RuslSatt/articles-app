import { useContext } from 'react';
import { Theme, ThemeContext, LS_THEME_KEY } from '../context/ThemeContext';

export interface UseThemeResult {
    theme: Theme;
    toggleTheme: () => void;
}

export const useTheme = (): UseThemeResult => {
    const { theme, setTheme } = useContext(ThemeContext);

    const toggleTheme = () => {
        const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
        setTheme?.(newTheme);
        localStorage.setItem(LS_THEME_KEY, newTheme);
    };

    return { theme: Theme.LIGHT, toggleTheme };
};
