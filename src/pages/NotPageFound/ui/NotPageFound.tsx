import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import style from './NotPageFound.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';

export interface NotPageFoundProps {
    className?: string
}

export const NotPageFound: FC<NotPageFoundProps> = (props) => {
    const { className } = props;

    const { t } = useTranslation();

    return (
        <div className={classNames(style.notPageFound, [className])}>
            <h1 className={style.notPageFound__title}>404</h1>
            <p className={style.notPageFound__text}>
                {t('Page not found')}
            </p>
        </div>
    );
};
