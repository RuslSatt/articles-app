import { FC } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import style from './ProfileForm.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { getProfileData } from '@/entities/profile';
import { Input } from '@/shared/ui/Input/Input';

export interface ProfileFormProps {
    className?: string;
}

export const ProfileForm: FC<ProfileFormProps> = (props) => {
    const { className } = props;

    const data = useSelector(getProfileData);

    const { t } = useTranslation();

    return (
        <div className={classNames(style.profileForm, [className])}>
            <Input value={data?.first} placeholder={t('Ваше имя')} />
            <Input value={data?.lastname} placeholder={t('Ваша фамилия')} />
            <Input type='number' value={data?.age} placeholder={t('Ваш возраст')} />
            <Input value={data?.city} placeholder={t('Ваш город')} />
            <Input value={data?.country} placeholder={t('Ваша страна')} />
            <Input value={data?.currency} placeholder={t('Валюта')} />
        </div>
    );
};
