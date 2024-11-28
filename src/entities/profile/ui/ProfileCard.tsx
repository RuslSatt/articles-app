import { memo, ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import style from './ProfileCard.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { IProfile } from '../model/types/profile';
import { Avatar, AvatarSize } from '@/shared/ui/Avatar/Avatar';

export interface ProfileCardProps {
    className?: string;
    data?: IProfile;
    form?: ReactNode;
    editButton?: ReactNode;
}

export const ProfileCard = memo((props: ProfileCardProps) => {
    const { className, form, editButton, data } = props;

    const { t } = useTranslation();

    return (
        <div data-testid='profile-card' className={classNames(style.profileCard, [className])}>
            <h1>{t('Профиль')}</h1>
            <Avatar size={AvatarSize.LARGE} image={data?.avatar || ''} />
            <div className={style.card__content}>{form}</div>
            <div className={style.card__footer}>{editButton}</div>
        </div>
    );
});
