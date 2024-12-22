import { useSelector } from 'react-redux';
import { StateSchema } from '@/app/providers/store';

export type Selector<T> = (state: StateSchema) => T;
export type Result<T> = [() => T, Selector<T>];

export function buildSelector<T>(selector: Selector<T>): Result<T> {
    const useSelectorHook = () => {
        return useSelector(selector);
    };

    return [useSelectorHook, selector];
}
