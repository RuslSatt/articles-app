import { ButtonHTMLAttributes, FC } from 'react';
import style from './Button.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import BurgerIcon from '@/shared/assets/icons/burger.svg';
import MoonIcon from '@/shared/assets/icons/moon.svg';
import SunIcon from '@/shared/assets/icons/sun.svg';
import LangIcon from '@/shared/assets/icons/lang.svg';
import { icons } from '@/shared/assets/icons/types';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    icon?: icons;
    text?: boolean;
    label?: string
    className?: string
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        className, children, label, text, icon, ...other
    } = props;

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
    }

    return (
        <button
            type="button"
            className={classNames(style.button, [className, text && style.text])}
            {...other}
        >
            {
                Icon
                && (
                    <span className={style.icon}>
                        {Icon}
                    </span>
                )
            }
            {label || children}
        </button>
    );
};
