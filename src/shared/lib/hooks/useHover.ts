import { useCallback, useMemo, useState } from 'react';

interface UseHoverCallbacks {
    onMouseEnter: () => void;
    onMouseLeave: () => void;
}

type UseHoverResult = [boolean, UseHoverCallbacks];

export const useHover = () => {
    const [hovered, setHovered] = useState(false);

    const onMouseEnter = useCallback(() => {
        setHovered(true);
    }, []);

    const onMouseLeave = useCallback(() => {
        setHovered(false);
    }, []);

    return useMemo(() => {
        return [hovered, { onMouseEnter, onMouseLeave }] as UseHoverResult;
    }, [hovered, onMouseEnter, onMouseLeave]);
};
