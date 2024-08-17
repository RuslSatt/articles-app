import { FC } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import style from './ProfileForm.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { getProfileReadonly, IProfile, profileActions } from '@/entities/profile';
import { Input } from '@/shared/ui/Input/Input';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';

export interface ProfileFormProps {
    className?: string;
    data?: IProfile;
}

export const ProfileForm: FC<ProfileFormProps> = (props) => {
    const { className, data } = props;

    const readonly = useSelector(getProfileReadonly);
    const dispatch = useAppDispatch();

    const { t } = useTranslation();

    const handlerChangeName = (value: string) => {
        dispatch(profileActions.setProfileData({ first: value }));
    };

    const handlerChangeLastName = (value: string) => {
        dispatch(profileActions.setProfileData({ lastname: value }));
    };

    const handlerChangeAge = (value: string) => {
        dispatch(profileActions.setProfileData({ age: Number(value) }));
    };

    const handlerChangeCity = (value: string) => {
        dispatch(profileActions.setProfileData({ city: value }));
    };

    // const handlerChangeCountry = (value: string) => {
    //     dispatch(profileActions.setProfileData({ country: value }));
    // };

    // const handlerChangeCurrency = (value: string) => {
    //     dispatch(profileActions.setProfileData({ currency: value }));
    // };

    return (
        <div className={classNames(style.profileForm, [className])}>
            <Input
                readOnly={readonly}
                value={data?.first}
                onChange={handlerChangeName}
                placeholder={t('Ваше имя')}
            />
            <Input
                readOnly={readonly}
                value={data?.lastname}
                onChange={handlerChangeLastName}
                placeholder={t('Ваша фамилия')}
            />
            <Input
                readOnly={readonly}
                type='number'
                value={data?.age}
                onChange={handlerChangeAge}
                placeholder={t('Ваш возраст')}
            />
            <Input
                readOnly={readonly}
                value={data?.city}
                onChange={handlerChangeCity}
                placeholder={t('Ваш город')}
            />
            <Input readOnly={readonly} value={data?.country} placeholder={t('Ваша страна')} />
            <Input readOnly={readonly} value={data?.currency} placeholder={t('Валюта')} />
        </div>
    );
};
