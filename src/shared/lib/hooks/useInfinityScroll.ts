import React, { useEffect } from 'react';

export interface UseInfinityScrollProps {
    callback?: () => void;
    triggerRef: React.RefObject<HTMLElement>;
    wrapperRef: React.RefObject<HTMLElement>;
}

export function useInfinityScroll(props: UseInfinityScrollProps) {
    const { callback, triggerRef, wrapperRef } = props;

    useEffect(() => {
        let observer: IntersectionObserver | null = null;

        if (callback) {
            const options = {
                root: wrapperRef.current,
                rootMargin: '0px',
                threshold: 1.0
            };

            observer = new IntersectionObserver(([entry]) => {
                if (entry.isIntersecting) {
                    callback();
                }
            }, options);

            if (triggerRef.current) observer.observe(triggerRef.current);
        }

        return () => {
            observer?.disconnect();
        };
    }, [callback, triggerRef, wrapperRef]);
}
