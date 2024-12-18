import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames/classNames';
import style from './ArticleDetailPage.module.scss';
import { ArticleDetails } from '@/entities/article';
import { CommentList } from '@/widgets/CommentList';
import { Page } from '@/widgets/Page/ui/Page';
import { ArticleRecommendationsList } from '@/widgets/ArticleRecommedationsList';
import { ArticleDetailPageHeader } from '../ArticleDetailPageHeader/ArticleDetailPageHeader';
import { ArticleRating } from '@/features/articleRating';

export interface ArticleDetailPageProps {
    className?: string;
}

const ArticleDetailPage = (props: ArticleDetailPageProps) => {
    const { className } = props;

    const { t } = useTranslation();

    const { id } = useParams<{ id: string }>();

    if (!id) {
        return (
            <Page className={classNames(style.articleDetailPage, [className])}>
                {t('ARTICLE NOT FOUND')}
            </Page>
        );
    }

    return (
        <Page className={classNames(style.articleDetailPage, [className])}>
            <ArticleDetailPageHeader />
            <ArticleDetails id={id} />
            <ArticleRecommendationsList />
            <ArticleRating articleId={id} />
            <CommentList id={id} />
        </Page>
    );
};

export default ArticleDetailPage;
