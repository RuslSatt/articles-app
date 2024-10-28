import { ReactNode } from 'react';
import style from './Page.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';

export interface PageProps {
    className?: string;
    children: ReactNode;
}

export const Page = (props: PageProps) => {
    const { className, children } = props;

    return <div className={classNames(style.page, [className])}>{children}</div>;
};
