import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button } from '@/shared/ui/Button/Button';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { HStack } from '@/shared/ui/Stack/HStack/HStack';
import { getProfileReadonly } from '../../model/selectors/getProfileData';
import { profileActions } from '../../model/slice/profileSlice';
import { updateProfileData } from '../../model/services/updateProfileData/updateProfileData';

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
            <HStack gap='10' justifyContent='end' className={classNames('', [className])}>
                <Button onClick={handlerEdit} label={t('Редактировать')} />
            </HStack>
        );
    }

    if (!readonly) {
        return (
            <HStack gap='10' justifyContent='end' className={classNames('', [className])}>
                <Button onClick={handlerCancelEdit} label={t('Отмена')} />
                <Button onClick={handlerSave} label={t('Сохранить')} />
            </HStack>
        );
    }

    return null;
};
