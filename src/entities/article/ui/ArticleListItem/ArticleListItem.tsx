import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import style from './ArticleListItem.module.scss';
import { ArticleView, IArticle } from '../../model/types/article';
import EyeIcon from '@/shared/assets/icons/eye.svg';

export interface ArticleTextBlockProps {
    className?: string;
    article: IArticle;
    view?: ArticleView;
}

export const ArticleListItem = memo((props: ArticleTextBlockProps) => {
    const { className, article, view = ArticleView.LIST } = props;

    let renderItem;

    if (view === ArticleView.GRID) {
        renderItem = () => {
            return (
                <div className={classNames(style.item, [className])}>
                    <div className={style.img__container}>
                        <img className={style.img} src={article?.img} alt={article?.title} />
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
            );
        };
    } else {
        renderItem = () => {
            return (
                <div className={classNames(style.item, [className])}>
                    {article?.title && <h3 className={style.title}>{article?.title}</h3>}
                </div>
            );
        };
    }

    return renderItem();
});
