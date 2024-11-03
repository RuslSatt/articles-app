import { CSSProperties, memo, useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import style from './SelectButton.module.scss';
import { Button } from '../Button/Button';

export interface SelectButtonOption<T extends string> {
    value: T;
    [key: string]: string;
}

export interface SelectButtonProps<T extends string> {
    className?: string;
    options: SelectButtonOption<T>[];
    optionLabel?: string;
    gap?: number;
    value?: T;
    onChange?: (value: T) => void;
}

export const SelectButton = <T extends string>(props: SelectButtonProps<T>) => {
    const { className, options, optionLabel = 'name', gap, value, onChange } = props;

    const propsStyles: CSSProperties = {
        gap: gap || 10
    };

    const onClickHandler = useCallback(
        (option: SelectButtonOption<T>) => () => {
            onChange?.(option.value as T);
        },
        [onChange]
    );

    return (
        <div style={propsStyles} className={classNames(style.selectButton, [className])}>
            {options?.map((option) => (
                <Button
                    className={option.value === value ? style.active : undefined}
                    onClick={onClickHandler(option)}
                    key={option.value}
                    label={option[optionLabel]}
                    value={option.value}
                />
            ))}
        </div>
    );
};
