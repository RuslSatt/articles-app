import style from './ThemeSwitcher.module.scss'
import { classNames } from "@/shared/lib/classNames/classNames";
import {FC, useState} from "react";

import MoonIcon from '@/shared/assets/icons/moon.svg';
import SunIcon from '@/shared/assets/icons/sun.svg';
import {Theme, useTheme} from "@/app/providers/theme";
import {Button} from "@/shared/ui/Button/Button";
import {icons} from "@/shared/assets/icons/types";

export interface ThemeSwitcherProps {
    className?: string
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = (props) => {
    const { className } = props

    const { theme, toggleTheme } = useTheme();

    const icon = theme === Theme.DARK ? icons.MOON : icons.SUN

    return (
        <Button
            text
            icon={icon}
            onClick={toggleTheme}
            className={classNames(style.themeSwitcher, [className])}
        >
        </Button>
    );
};
