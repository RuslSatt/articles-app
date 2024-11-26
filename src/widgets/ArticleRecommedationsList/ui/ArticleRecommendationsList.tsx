import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import style from './ArticleRecommendationsList.module.scss';
import { ArticleView } from '@/entities/article';
import { ArticleList } from '@/widgets/ArticleList';
import { useFetchArticleRecommendationsQuery } from '../api';

export interface ArticleRecommendationsListProps {
    className?: string;
}

export const ArticleRecommendationsList = memo((props: ArticleRecommendationsListProps) => {
    const { className } = props;

    const { t } = useTranslation();

    const { data, isLoading, error } = useFetchArticleRecommendationsQuery(4);

    if (isLoading || error) {
        return null;
    }

    return (
        <div className={classNames(style.articleRecommendations, [className])}>
            <p className={style.title}>{t('Рекомендуем')}</p>
            <ArticleList
                target='_blank'
                articles={data ?? []}
                isLoading={isLoading}
                view={ArticleView.GRID}
            />
        </div>
    );
});
