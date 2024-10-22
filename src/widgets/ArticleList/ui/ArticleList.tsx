import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import style from './ArticleList.module.scss';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';
import { IArticle, ArticleListItem, ArticleView } from '@/entities/article';

export interface ArticleListProps {
    className?: string;
    articles: IArticle[];
    view?: ArticleView;
    isLoading?: boolean;
}

export const ArticleList = memo((props: ArticleListProps) => {
    const { className, articles, isLoading, view = ArticleView.LIST } = props;

    const { t } = useTranslation();

    let content;

    if (isLoading) {
        // content = (
        //     <div className={style.skeleton}>
        //         <div className={style.skeleton_user}>
        //             <Skeleton width={32} height={32} />
        //             <Skeleton width={100} height={32} />
        //         </div>
        //         <Skeleton width='100%' height={32} />
        //         <Skeleton width='100%' height={32} />
        //     </div>
        // );
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
