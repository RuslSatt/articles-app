import { FC } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import style from './ProfileForm.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
    getProfileReadonly,
    getProfileValidateErrors,
    IProfile,
    profileActions
} from '@/entities/profile';
import { Input } from '@/shared/ui/Input/Input';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Currency, CurrencySelect } from '@/entities/currency';
import { Country, CountrySelect } from '@/entities/countries';
import { ValidateProfileError } from '@/entities/profile/model/types/profile';
import { Message, Severity } from '@/shared/ui/Message/Message';

export interface ProfileFormProps {
    className?: string;
    data?: IProfile;
}

export const ProfileForm: FC<ProfileFormProps> = (props) => {
    const { className, data } = props;

    const errors = useSelector(getProfileValidateErrors);
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

    const onChangeCurrency = (value: string) => {
        dispatch(profileActions.setProfileData({ currency: value as Currency }));
    };

    const onChangeCountry = (value: string) => {
        dispatch(profileActions.setProfileData({ country: value as Country }));
    };

    const validateErrorsTranslate = {
        [ValidateProfileError.SERVER_ERROR]: t('Серверная ошибка при сохранении'),
        [ValidateProfileError.INCORRECT_USER_DATA]: t('Имя и фамилия обязательны'),
        [ValidateProfileError.INCORRECT_AGE]: t('Некорректный возраст'),
        [ValidateProfileError.INCORRECT_CITY]: t('Некорректный город'),
        [ValidateProfileError.INCORRECT_COUNTRY]: t('Некорректная страна'),
        [ValidateProfileError.NO_DATA]: t('Данные не указаны')
    };

    const errorsMessage = errors?.map((err) => (
        <Message severity={Severity.ERROR} text={validateErrorsTranslate[err]} key={err} />
    ));

    return (
        <div className={classNames(style.profileForm, [className])}>
            {errors?.length && errorsMessage}
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
            <CurrencySelect
                readonly={readonly}
                value={data?.currency}
                onChange={onChangeCurrency}
            />
            <CountrySelect readonly={readonly} value={data?.country} onChange={onChangeCountry} />
        </div>
    );
};
