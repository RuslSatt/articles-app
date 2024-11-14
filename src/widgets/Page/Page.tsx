import React, { ReactNode, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import style from './Page.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useInfinityScroll } from '@/shared/lib/hooks/useInfinityScroll';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getSaveScrollPositionByPath, saveScrollActions } from '@/features/saveScroll';
import { StateSchema } from '@/app/providers/store';
import { useInitialEffect } from '@/shared/lib/hooks/useInitailEffect';
import { useThrottle } from '@/shared/lib/hooks/useThrottle';

export interface PageProps {
    className?: string;
    children: ReactNode;
    onScrollEnd?: () => void;
}

export const Page = (props: PageProps) => {
    const { className, children, onScrollEnd } = props;

    const dispatch = useAppDispatch();
    const { pathname } = useLocation();
    const scrollPosition = useSelector((state: StateSchema) =>
        getSaveScrollPositionByPath(state, pathname)
    );

    const wrapperRef = useRef<HTMLDivElement>(null);
    const triggerRef = useRef<HTMLDivElement>(null);

    useInfinityScroll({
        callback: onScrollEnd,
        triggerRef,
        wrapperRef
    });

    useInitialEffect(() => {
        wrapperRef.current!.scrollTop = scrollPosition;
    });

    const onScroll = useThrottle((e: React.UIEvent<HTMLDivElement>) => {
        const scrollTop = e.currentTarget?.scrollTop;

        dispatch(
            saveScrollActions.setScrollPosition({
                path: pathname,
                position: scrollTop ?? 0
            })
        );
    }, 500);

    return (
        <div onScroll={onScroll} ref={wrapperRef} className={classNames(style.page, [className])}>
            {children}
            {onScrollEnd ? <div className={style.trigger} ref={triggerRef} /> : null}
        </div>
    );
};
