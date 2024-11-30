import { FC } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { IProfile } from '@/entities/profile';
import { Input } from '@/shared/ui/Input/Input';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Currency, CurrencySelect } from '@/entities/currency';
import { Country, CountrySelect } from '@/entities/countries';
import { Message, Severity } from '@/shared/ui/Message/Message';
import { VStack } from '@/shared/ui/Stack/VStack/VStack';
import { ValidateProfileError } from '../../model/consts/consts';
import { profileActions } from '../../model/slice/profileSlice';
import { getProfileReadonly, getProfileValidateErrors } from '../../model/selectors/getProfileData';

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

    const errorsMessage = errors?.map((err: ValidateProfileError) => (
        <Message
            data-testid='profile-error-message'
            severity={Severity.ERROR}
            text={validateErrorsTranslate[err]}
            key={err}
        />
    ));

    return (
        <VStack data-testid='profile-form' gap='10' className={classNames('', [className])}>
            {errors?.length && errorsMessage}
            <Input
                readOnly={readonly}
                value={data?.first}
                onChange={handlerChangeName}
                placeholder={t('Ваше имя')}
                data-testid='profile-first-name'
            />
            <Input
                readOnly={readonly}
                value={data?.lastname}
                onChange={handlerChangeLastName}
                placeholder={t('Ваша фамилия')}
                data-testid='profile-last-name'
            />
            <Input
                readOnly={readonly}
                type='number'
                value={data?.age}
                onChange={handlerChangeAge}
                placeholder={t('Ваш возраст')}
                data-testid='profile-age'
            />
            <Input
                readOnly={readonly}
                value={data?.city}
                onChange={handlerChangeCity}
                placeholder={t('Ваш город')}
                data-testid='profile-city'
            />
            <CurrencySelect
                readonly={readonly}
                value={data?.currency}
                onChange={onChangeCurrency}
                data-testid='profile-currency'
            />
            <CountrySelect
                readonly={readonly}
                value={data?.country}
                onChange={onChangeCountry}
                data-testid='profile-country'
            />
        </VStack>
    );
};
