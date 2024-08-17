import { Select } from '@/shared/ui/Select/Select';
import { memo } from 'react';

export enum Country {
    RUSSIA = 'RU',
    UZBEKISTAN = 'UZ',
    KAZAKHSTAN = 'KZ',
    TURKMENISTAN = 'TM'
}

export interface CountrySelectProps {
    className?: string;
    value?: string;
    onChange?: (value: string) => void;
    readonly?: boolean;
}

const countryItems = Object.values(Country).map((c) => ({ name: c, value: c }));

export const CountrySelect = memo((props: CountrySelectProps) => {
    const { className, value, onChange, readonly } = props;

    return (
        <Select
            disabled={readonly}
            value={value}
            options={countryItems}
            optionLabel={'name'}
            onChange={onChange}
        />
    );
});
