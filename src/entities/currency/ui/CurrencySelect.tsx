import { memo } from 'react';
import { Select } from '@/shared/ui/Select/Select';

export enum Currency {
    RUB = 'RUB',
    USD = 'USD',
    EUR = 'EUR'
}

export interface CurrencySelectProps {
    className?: string;
    value?: string;
    onChange?: (value: string) => void;
    readonly?: boolean;
}

const currencyItems = Object.values(Currency).map((c) => ({ name: c, value: c }));

export const CurrencySelect = memo((props: CurrencySelectProps) => {
    const { className, value, onChange, readonly } = props;

    return (
        <Select
            disabled={readonly}
            value={value}
            options={currencyItems}
            optionLabel='name'
            onChange={onChange}
        />
    );
});
