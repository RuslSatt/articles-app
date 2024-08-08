import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import style from './ProfilePage.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';

export interface ProfilePageProps {
    className?: string;
}

const ProfilePage: FC<ProfilePageProps> = (props) => {
    const { className } = props;

    const { t } = useTranslation();

    return (
        <div className={classNames(style.profilePage, [className])}>
            <div>{t('Profile Page')}</div>
        </div>
    );
};

export default ProfilePage;
