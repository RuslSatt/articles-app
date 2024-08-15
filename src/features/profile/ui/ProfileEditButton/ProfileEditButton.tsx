import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import style from './ProfileEditButton.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button } from '@/shared/ui/Button/Button';

export interface ProfileEditButtonProps {
    className?: string;
}

export const ProfileEditButton: FC<ProfileEditButtonProps> = (props) => {
    const { className } = props;

    const { t } = useTranslation();

    return (
        <div className={classNames(style.profilePage, [className])}>
            <Button label={t('Редактировать')} className={style.button} />
        </div>
    );
};
