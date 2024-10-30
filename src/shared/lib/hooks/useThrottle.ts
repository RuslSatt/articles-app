import { useCallback, useRef } from 'react';

export function useThrottle(callback: (...args: any) => void, delay: number) {
    const throttleRef = useRef(false);
    const timeoutId = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
    return useCallback(
        (...args: any) => {
            if (!throttleRef.current) {
                callback(...args);
                throttleRef.current = true;

                if (timeoutId) clearTimeout(timeoutId.current);

                timeoutId.current = setTimeout(() => {
                    throttleRef.current = false;
                }, delay);
            }
        },
        [callback, delay]
    );
}
