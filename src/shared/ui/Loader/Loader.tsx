import { FC } from 'react';
import style from './Loader.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';

export interface LoaderProps {
    className?: string;
}

export const Loader: FC<LoaderProps> = (props) => {
    const { className } = props;

    return (
        <div className={classNames(style.loader, [className])}>
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
        </div>
    );
};
