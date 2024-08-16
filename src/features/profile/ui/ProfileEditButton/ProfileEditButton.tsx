import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import style from './ProfileEditButton.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button } from '@/shared/ui/Button/Button';
import { getProfileReadonly, profileActions, updateProfileData } from '@/entities/profile';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';

export interface ProfileEditButtonProps {
    className?: string;
}

export const ProfileEditButton: FC<ProfileEditButtonProps> = (props) => {
    const { className } = props;

    const { t } = useTranslation();

    const dispatch = useAppDispatch();

    const readonly = useSelector(getProfileReadonly);

    const handlerEdit = () => {
        dispatch(profileActions.setReadonly(false));
    };

    const handlerCancelEdit = () => {
        dispatch(profileActions.cancelEdit());
    };

    const handlerSave = () => {
        dispatch(updateProfileData());
    };

    if (readonly) {
        return (
            <div className={classNames(style.buttons, [className])}>
                <Button onClick={handlerEdit} label={t('Редактировать')} className={style.button} />
            </div>
        );
    }

    if (!readonly) {
        return (
            <div className={classNames(style.buttons, [className])}>
                <Button onClick={handlerCancelEdit} label={t('Отмена')} className={style.button} />
                <Button onClick={handlerSave} label={t('Сохранить')} className={style.button} />
            </div>
        );
    }

    return null;
};
