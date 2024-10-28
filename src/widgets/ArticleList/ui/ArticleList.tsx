import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import style from './ArticleList.module.scss';
import {
    IArticle,
    ArticleListItem,
    ArticleView,
    ArticleListItemSkeleton
} from '@/entities/article';
// eslint-disable-next-line max-len

export interface ArticleListProps {
    className?: string;
    articles: IArticle[];
    view?: ArticleView;
    isLoading?: boolean;
}

export const ArticleList = memo((props: ArticleListProps) => {
    const { className, articles, isLoading = false, view = ArticleView.LIST } = props;

    const { t } = useTranslation();

    let content;

    if (isLoading) {
        content = (
            <ul className={style[view]}>
                <ArticleListItemSkeleton view={view} />
            </ul>
        );
    } else if (!articles?.length) {
        content = <p>{t('Статьи отсутствуют')}</p>;
    } else {
        content = (
            <ul className={style[view]}>
                {articles?.map((article) => (
                    <ArticleListItem key={article.id} article={article} view={view} />
                ))}
            </ul>
        );
    }

    return <div className={classNames(style.article_list, [className])}>{content}</div>;
});
