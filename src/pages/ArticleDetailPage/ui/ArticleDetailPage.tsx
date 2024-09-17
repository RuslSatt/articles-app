import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames/classNames';
import style from './ArticleDetailPage.module.scss';
import { ArticleDetails } from '@/entities/article';

export interface ArticleDetailPageProps {
    className?: string;
}

const ArticleDetailPage = (props: ArticleDetailPageProps) => {
    const { className } = props;

    const { t } = useTranslation();

    const { id } = useParams<{ id: string }>();

    if (!id) {
        return (
            <div className={classNames(style.articleDetailPage, [className])}>
                {t('ARTICLE NOT FOUND')}
            </div>
        );
    }

    return (
        <div className={classNames(style.articleDetailPage, [className])}>
            <ArticleDetails id={id} />
        </div>
    );
};

export default ArticleDetailPage;
