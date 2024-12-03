import { memo } from 'react';
import { Listbox } from '@/shared/ui/Popups';
import { Country } from '../model/consts/consts';

export interface CountrySelectProps {
    className?: string;
    value?: string;
    onChange?: (value: string) => void;
    readonly?: boolean;
}

const countryItems = Object.values(Country).map((c) => ({ id: c, name: c, value: c }));

export const CountrySelect = memo((props: CountrySelectProps) => {
    const { className, value, onChange, readonly } = props;

    return (
        <Listbox
            disabled={readonly}
            value={value}
            options={countryItems}
            optionLabel='name'
            onChange={onChange}
        />
    );
});
