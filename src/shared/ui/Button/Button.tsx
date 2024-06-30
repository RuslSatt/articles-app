import style from './Button.module.scss'
import { classNames } from "@/shared/lib/classNames/classNames";
import {ButtonHTMLAttributes, FC} from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    text?: boolean;
    label?: string
    className?: string
}

export const Button: FC<ButtonProps> = (props) => {
    const { className, children, label, text, ...other } = props

    return (
        <button
            type='button'
            className={classNames(style.button,[className, text && style.text])}
            {...other}
        >
            {label ? label : children}
        </button>
    );
};
