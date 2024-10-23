import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import style from './ArticleListItem.module.scss';
import { ArticleView, IArticle } from '../../model/types/article';
import EyeIcon from '@/shared/assets/icons/eye.svg';
import { Card } from '@/shared/ui/Card/Card';

export interface ArticleTextBlockProps {
    className?: string;
    article: IArticle;
    view?: ArticleView;
}

export const ArticleListItem = memo((props: ArticleTextBlockProps) => {
    const { className, article, view = ArticleView.LIST } = props;

    if (view === ArticleView.LIST) {
        return (
            <div className={classNames(style.item, [className])}>
                {article?.title && <h3 className={style.title}>{article?.title}</h3>}
            </div>
        );
    }

    return (
        <div className={classNames(style.item, [className])}>
            <Card>
                <div className={style.item__container}>
                    <div className={style.img__container}>
                        <img className={style.img} src={article?.img} alt={article?.title} />
                        <div className={style.date}>{article?.createdAt}</div>
                    </div>
                    <div className={style.info__container}>
                        <div className={style.info}>
                            <div className={style.info__type}>{article?.type}</div>
                            <div className={style.info__views}>
                                <div className={style.info__views_count}>{article.views}</div>
                                <EyeIcon className={style.info__views_icon} />
                            </div>
                        </div>
                        <div className={style.title}>{article?.title}</div>
                    </div>
                </div>
            </Card>
        </div>
    );
});
