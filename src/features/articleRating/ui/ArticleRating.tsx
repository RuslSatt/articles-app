import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useCallback } from 'react';
import { RatingCard } from '@/entities/rating';
import { useGetArticleRatingQuery, useRateArticleMutation } from '../api/articleRatingApi';
import { getUserData } from '@/entities/user';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';

export interface ArticleRatingProps {
    className?: string;
    articleId: string;
}

const ArticleRating = (props: ArticleRatingProps) => {
    const { className, articleId } = props;

    const { t } = useTranslation();

    const userData = useSelector(getUserData);

    const { data, isLoading } = useGetArticleRatingQuery({
        userId: userData?.id ?? '',
        articleId
    });

    const [rateArticleMutation] = useRateArticleMutation();

    const handleRateArticle = useCallback(
        (rate: number, feedback?: string) => {
            try {
                rateArticleMutation({
                    userId: userData?.id ?? '',
                    articleId,
                    rate,
                    feedback
                });
            } catch (e) {
                console.error(e);
            }
        },
        [articleId, rateArticleMutation, userData?.id]
    );

    const onCancel = useCallback(
        (rate: number) => {
            handleRateArticle(rate);
        },
        [handleRateArticle]
    );

    const onAccept = useCallback(
        (rate: number, feedback?: string) => {
            handleRateArticle(rate, feedback);
        },
        [handleRateArticle]
    );

    if (isLoading) {
        return <Skeleton width='100%' height={50} />;
    }

    const rating = data?.length ? data[data.length - 1] : undefined;

    return (
        <RatingCard
            onCancel={onCancel}
            onAccept={onAccept}
            rate={rating?.rate}
            title={t('Оценка статьи')}
            feedbackTitle={t('Оставьте свой отзыв')}
            className={className}
            hasFeedback
        />
    );
};

export default ArticleRating;
