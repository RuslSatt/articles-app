import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import style from './NotPageFound.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Page } from '@/widgets/Page/ui/Page';

export interface NotPageFoundProps {
    className?: string;
}

export const NotPageFound: FC<NotPageFoundProps> = (props) => {
    const { className } = props;

    const { t } = useTranslation();

    return (
        <Page className={classNames(style.notPageFound, [className])}>
            <h1 className={style.notPageFound__title}>404</h1>
            <p className={style.notPageFound__text}>{t('Page not found')}</p>
        </Page>
    );
};
