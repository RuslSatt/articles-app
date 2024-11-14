import { HTMLAttributes, memo, ReactNode } from 'react';
import style from './Card.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
    children?: ReactNode;
    className?: string;
}

export const Card = memo((props: CardProps) => {
    const { className, children, ...other } = props;

    return (
        <div className={classNames(style.card, [className])} {...other}>
            {children}
        </div>
    );
});
