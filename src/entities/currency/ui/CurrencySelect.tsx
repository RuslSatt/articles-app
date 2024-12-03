import { memo } from 'react';
import { Listbox } from '@/shared/ui/Popups';
import { Currency } from '../model/consts/consts';

export interface CurrencySelectProps {
    className?: string;
    value?: string;
    onChange?: (value: string) => void;
    readonly?: boolean;
}

const currencyItems = Object.values(Currency).map((c) => ({ id: c, name: c, value: c }));

export const CurrencySelect = memo((props: CurrencySelectProps) => {
    const { className, value, onChange, readonly } = props;

    return (
        <Listbox
            disabled={readonly}
            value={value}
            options={currencyItems}
            optionLabel='name'
            onChange={onChange}
        />
    );
});
