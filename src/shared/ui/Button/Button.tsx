import { ButtonHTMLAttributes, memo, ReactNode } from 'react';
import style from './Button.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import BurgerIcon from '@/shared/assets/icons/burger.svg';
import MoonIcon from '@/shared/assets/icons/moon.svg';
import SunIcon from '@/shared/assets/icons/sun.svg';
import LangIcon from '@/shared/assets/icons/lang.svg';
import CalendarIcon from '@/shared/assets/icons/calendar.svg';
import CheckIcon from '@/shared/assets/icons/check.svg';
import CopyIcon from '@/shared/assets/icons/copy.svg';
import EyeIcon from '@/shared/assets/icons/eye.svg';
import GridIcon from '@/shared/assets/icons/grid.svg';
import ListIcon from '@/shared/assets/icons/list.svg';
import Bell from '@/shared/assets/icons/bell.svg';
import { icons } from '@/shared/assets/icons/types';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    icon?: icons;
    text?: boolean;
    label?: string;
    className?: string;
    children?: ReactNode;
}

export const Button = memo((props: ButtonProps) => {
    const { className, children, label, text, icon, ...other } = props;

    let Icon = null;

    // eslint-disable-next-line default-case
    switch (icon) {
        case icons.BURGER:
            Icon = <BurgerIcon />;
            break;
        case icons.MOON:
            Icon = <MoonIcon />;
            break;
        case icons.SUN:
            Icon = <SunIcon />;
            break;
        case icons.LANG:
            Icon = <LangIcon />;
            break;
        case icons.CALENDAR:
            Icon = <CalendarIcon />;
            break;
        case icons.CHECK:
            Icon = <CheckIcon />;
            break;
        case icons.COPY:
            Icon = <CopyIcon />;
            break;
        case icons.EYE:
            Icon = <EyeIcon />;
            break;
        case icons.GRID:
            Icon = <GridIcon />;
            break;
        case icons.LIST:
            Icon = <ListIcon />;
            break;
        case icons.BELL:
            Icon = <Bell />;
            break;
    }

    return (
        <button
            type='button'
            className={classNames(style.button, [className], { [style.text]: text })}
            {...other}
        >
            {Icon && <span className={style.icon}>{Icon}</span>}
            {label || children}
        </button>
    );
});
