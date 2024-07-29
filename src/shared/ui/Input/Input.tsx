import React, { FC, InputHTMLAttributes, useEffect, useRef } from 'react';
import style from './Input.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>;

export interface InputProps extends HTMLInputProps {
    type?: string;
    className?: string;
    value?: string;
    autofocus?: boolean;
    onChange?: (value: string) => void;
}

export const Input: FC<InputProps> = (props) => {
    const { type = 'text', autofocus, className, children, value, onChange, ...other } = props;

    const handlerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };

    const [isFocused, setIsFocused] = React.useState(false);
    const ref = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (autofocus) {
            setIsFocused(true);
            ref.current?.focus();
        }
    }, [autofocus, isFocused]);

    return (
        <input
            ref={ref}
            type={type}
            value={value}
            onChange={handlerChange}
            className={classNames(style.input, [className])}
            {...other}
        />
    );
};
