import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import style from './ArticleRecommendationsList.module.scss';
import { ArticleView, IArticle } from '@/entities/article';
import { ArticleList } from '@/widgets/ArticleList';

export interface ArticleRecommendationsListProps {
    className?: string;
    articles: IArticle[];
    isLoading?: boolean;
}

export const ArticleRecommendationsList = memo((props: ArticleRecommendationsListProps) => {
    const { className, articles, isLoading = false } = props;

    const { t } = useTranslation();

    return (
        <div className={classNames(style.articleRecommendations, [className])}>
            <p className={style.title}>{t('Рекомендуем')}</p>
            <ArticleList articles={articles} isLoading={isLoading} view={ArticleView.GRID} />
        </div>
    );
});
