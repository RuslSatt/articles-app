import { Listbox as HListBox } from '@headlessui/react';
import { Fragment } from 'react';
import style from './ListBox.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { VStack } from '../Stack/VStack/VStack';

export interface ListBoxOption<T extends string> {
    [key: string]: string;
}

export interface ListBoxProps<T extends string> {
    className?: string;
    value?: string;
    onChange?: (value: T) => void;
    disabled?: boolean;
    options?: ListBoxOption<T>[];
    optionLabel?: string;
}

export const Listbox = <T extends string>(props: ListBoxProps<T>) => {
    const { className, value, onChange, disabled, options = [], optionLabel = 'name' } = props;

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
                    ? options.find((option) => option.value === value)?.[optionLabel]
                    : 'Выберите значение'}
            </HListBox.Button>
            <HListBox.Options className={style.options}>
                <VStack gap='5'>
                    {options?.map((option) => (
                        <HListBox.Option key={option.id} value={option.value} as={Fragment}>
                            {({ active, selected }) => (
                                <li
                                    className={classNames(style.option, [], {
                                        [style.active]: active,
                                        [style.selected]: selected
                                    })}
                                >
                                    {option[optionLabel]}
                                </li>
                            )}
                        </HListBox.Option>
                    ))}
                </VStack>
            </HListBox.Options>
        </HListBox>
    );
};
