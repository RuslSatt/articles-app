import React, { memo, useMemo } from 'react';
import style from './Select.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';

export interface SelectOption<T extends string> {
    [key: string]: string;
}

export interface SelectProps<T extends string> {
    className?: string;
    value?: string;
    onChange?: (value: T) => void;
    disabled?: boolean;
    options?: SelectOption<T>[];
    optionLabel?: string;
}

export const Select = <T extends string>(props: SelectProps<T>) => {
    const { className, value, onChange, disabled, options = [], optionLabel = 'name' } = props;

    const data = useMemo(
        () =>
            options?.map((item) => (
                <option value={item.value} key={item[optionLabel]}>
                    {item[optionLabel]}
                </option>
            )),
        [options, optionLabel]
    );

    const handlerChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        onChange?.(e.target.value as T);
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
};
