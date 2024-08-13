import { memo, ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import style from './ProfileCard.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { getProfileData } from '../model/selectors/getProfileData';
import { getProfileError } from '../model/selectors/getProfileError';
import { getProfileLoading } from '../model/selectors/getProfileLoading';
import { Input } from '@/shared/ui/Input/Input';
import { Button } from '@/shared/ui/Button/Button';

export interface ProfileCardProps {
    className?: string;
    children?: ReactNode;
}

export const ProfileCard = memo((props: ProfileCardProps) => {
    const { className, children, ...other } = props;

    const data = useSelector(getProfileData);
    const error = useSelector(getProfileError);
    const isLoading = useSelector(getProfileLoading);

    const { t } = useTranslation();

    return (
        <div {...other} className={classNames(style.profileCard, [className])}>
            <h1>{t('Профиль')}</h1>
            <div className={style.card__content}>
                <Input value={data?.first} />
                <Input value={data?.lastname} />
            </div>
            <div className={style.card__footer}>
                <Button>{t('Редактировать')}</Button>
            </div>
        </div>
    );
});
