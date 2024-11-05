import { memo } from 'react';
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

    return (
        <div className={classNames(style.article_list, [className])}>
            <ul className={style[view]}>
                {articles?.length > 0 &&
                    articles?.map((article) => (
                        <ArticleListItem key={article.id} article={article} view={view} />
                    ))}
                {isLoading && <ArticleListItemSkeleton view={view} />}
            </ul>
        </div>
    );
});
