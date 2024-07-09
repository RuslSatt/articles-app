import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import style from './PageError.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button } from '@/shared/ui/Button/Button';

export interface PageErrorProps {
    className?: string
}

export const PageError: FC<PageErrorProps> = (props) => {
    const { className } = props;

    const { t } = useTranslation();

    const onReloadPage = () => {
        window.location.reload();
    };

    return (
        <div className={classNames(style.pageError, [className])}>
            <h1 className={style.pageError__title}>{t('Произошла ошибка')}</h1>
            <Button
                onClick={onReloadPage}
                className={style.pageError__text}
                label={t('Обновить страницу')}
            />
        </div>
    );
};
