import { memo, ReactNode } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import style from './AppLink.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';

export interface AppLinkProps extends LinkProps {
    className?: string;
    children?: ReactNode;
}

export const AppLink = memo((props: AppLinkProps) => {
    const { className, children, to, ...other } = props;

    return (
        <Link to={to} {...other} className={classNames(style.appLink, [className])}>
            {children}
        </Link>
    );
});
