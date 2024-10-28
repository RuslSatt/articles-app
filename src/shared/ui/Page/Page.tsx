import { ReactNode, useRef } from 'react';
import style from './Page.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useInfinityScroll } from '@/shared/lib/hooks/useInfinityScroll';

export interface PageProps {
    className?: string;
    children: ReactNode;
    onScrollEnd?: () => void;
}

export const Page = (props: PageProps) => {
    const { className, children, onScrollEnd } = props;

    const wrapperRef = useRef<HTMLDivElement>(null);
    const triggerRef = useRef<HTMLDivElement>(null);

    useInfinityScroll({
        callback: onScrollEnd,
        triggerRef,
        wrapperRef
    });

    return (
        <div ref={wrapperRef} className={classNames(style.page, [className])}>
            {children}
            <div ref={triggerRef} />
        </div>
    );
};
