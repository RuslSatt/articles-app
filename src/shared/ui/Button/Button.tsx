import style from './Button.module.scss'
import { classNames } from "@/shared/lib/classNames/classNames";
import {ButtonHTMLAttributes, FC} from "react";
import BurgerIcon from "@/shared/assets/icons/burger.svg";
import {icons} from "@/shared/assets/icons/types";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    icon?: icons;
    text?: boolean;
    label?: string
    className?: string
}

export const Button: FC<ButtonProps> = (props) => {
    const { className, children, label, text, icon, ...other } = props

    let Icon = null;

    switch (icon) {
        case icons.BURGER:
            Icon = <BurgerIcon />
    }

    return (
        <button
            type='button'
            className={classNames(style.button,[className, text && style.text])}
            {...other}
        >
            {
                Icon &&
                <span className={style.icon}>
                    {Icon}
                </span>
            }
            {label ? label : children}
        </button>
    );
};
