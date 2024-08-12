import { memo } from 'react';
import style from './ThemeSwitcher.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Theme, useTheme } from '@/app/providers/theme';
import { Button } from '@/shared/ui/Button/Button';
import { icons } from '@/shared/assets/icons/types';

export interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = memo((props: ThemeSwitcherProps) => {
    const { className } = props;

    const { theme, toggleTheme } = useTheme();

    const icon = theme === Theme.DARK ? icons.MOON : icons.SUN;

    return (
        <Button
            text
            icon={icon}
            onClick={toggleTheme}
            className={classNames(style.themeSwitcher, [className])}
        />
    );
});
