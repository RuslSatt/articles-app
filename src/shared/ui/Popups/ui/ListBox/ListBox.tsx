import { Listbox as HListBox } from '@headlessui/react';
import { Fragment } from 'react';
import style from './ListBox.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import popupStyle from '../../styles/Popups.module.scss';
import { directionClasses, PopupDirection } from '../../styles/consts';

export interface ListBoxOption<T extends string> {
    id: string;
    value: T;
    name: string;
}

export interface ListBoxProps<T extends string> {
    className?: string;
    value?: string;
    onChange?: (value: T) => void;
    disabled?: boolean;
    options?: ListBoxOption<T>[];
    optionLabel?: string;
    direction?: PopupDirection;
}

export const Listbox = <T extends string>(props: ListBoxProps<T>) => {
    const {
        className,
        value,
        onChange,
        disabled,
        options = [],
        optionLabel = 'name',
        direction = 'bottom-left'
    } = props;

    return (
        <HListBox
            as='div'
            className={classNames(style.ListBox, [className])}
            value={value}
            onChange={onChange}
            disabled={disabled}
        >
            <HListBox.Button className={style.button}>
                {value
                    ? options.find((option) => option.value === value)?.name
                    : 'Выберите значение'}
            </HListBox.Button>
            <HListBox.Options
                className={classNames(popupStyle.items, [directionClasses[direction], style.items])}
            >
                {options?.map((option) => (
                    <HListBox.Option key={option.id} value={option.value} as={Fragment}>
                        {({ active, selected }) => (
                            <li
                                className={classNames(popupStyle.item, [], {
                                    [style.active]: active,
                                    [style.selected]: selected
                                })}
                            >
                                {option.name}
                            </li>
                        )}
                    </HListBox.Option>
                ))}
            </HListBox.Options>
        </HListBox>
    );
};
