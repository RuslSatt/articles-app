import { memo, ReactNode } from 'react';
import style from './Profile.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';

export interface ProfileProps {
    className?: string;
    children?: ReactNode;
}

export const Profile = memo((props: ProfileProps) => {
    const { className, children, ...other } = props;

    return (
        <div {...other} className={classNames(style.profile, [className])}>
            {children}
        </div>
    );
});
