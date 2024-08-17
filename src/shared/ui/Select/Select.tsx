import React, { memo, useMemo } from 'react';
import style from './Select.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';

interface Option {
    [key: string]: string;
}

export interface SelectProps {
    className?: string;
    value?: string;
    onChange?: (value: string) => void;
    disabled?: boolean;
    options?: Option[];
    optionLabel?: string;
}

export const Select = memo((props: SelectProps) => {
    const {
        className,
        value,
        onChange = (value) => {},
        disabled,
        options = [],
        optionLabel = 'name'
    } = props;

    const data = useMemo(
        () =>
            options?.map((item) => (
                <option value={item[optionLabel]} key={item[optionLabel]}>
                    {item[optionLabel]}
                </option>
            )),
        [options, optionLabel]
    );

    const handlerChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        onChange?.(e.target.value);
    };

    return (
        <select
            value={value}
            onChange={handlerChange}
            className={classNames(style.select, [className])}
            disabled={disabled}
        >
            {data}
        </select>
    );
});
