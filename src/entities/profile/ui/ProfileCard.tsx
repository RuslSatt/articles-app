import { memo, ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import style from './ProfileCard.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';

export interface ProfileCardProps {
    className?: string;
    form?: ReactNode;
    editButton?: ReactNode;
}

export const ProfileCard = memo((props: ProfileCardProps) => {
    const { className, form, editButton, ...other } = props;

    const { t } = useTranslation();

    return (
        <div {...other} className={classNames(style.profileCard, [className])}>
            <h1>{t('Профиль')}</h1>
            <div className={style.card__content}>{form}</div>
            <div className={style.card__footer}>{editButton}</div>
        </div>
    );
});
