import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import style from './ArticleDetailPageHeader.module.scss';
import { Button } from '@/shared/ui/Button/Button';
import { AppRoutes, RoutePath } from '@/shared/config/router/routerConfig';
import { getCanEditArticle } from '../../model/selectors/article/getCanEditArticle';
import { getArticleDetailsData } from '@/entities/article';

export interface ArticleDetailPageHeaderProps {
    className?: string;
}

export const ArticleDetailPageHeader = memo((props: ArticleDetailPageHeaderProps) => {
    const { className } = props;

    const { t } = useTranslation();

    const canEdit = useSelector(getCanEditArticle);
    const articleData = useSelector(getArticleDetailsData);

    const navigate = useNavigate();

    const onBackToList = useCallback(() => {
        navigate(RoutePath[AppRoutes.ARTICLES]);
    }, [navigate]);

    const onEditArticle = useCallback(() => {
        navigate(`${RoutePath[AppRoutes.ARTICLES]}/${articleData?.id}/edit`);
    }, [articleData?.id, navigate]);

    return (
        <header className={classNames(style.header, [className])}>
            <Button className={style.button} label={t('Назад к списку')} onClick={onBackToList} />
            {canEdit && (
                <Button
                    className={style.button_edit}
                    label={t('Редактировать')}
                    onClick={onEditArticle}
                />
            )}
        </header>
    );
});
