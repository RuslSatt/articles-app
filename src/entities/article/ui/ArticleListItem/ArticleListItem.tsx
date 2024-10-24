import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import style from './ArticleListItem.module.scss';
import {
    ArticleBlockType,
    ArticleView,
    IArticle,
    IArticleTextBlock
} from '../../model/types/article';
import EyeIcon from '@/shared/assets/icons/eye.svg';
import { Card } from '@/shared/ui/Card/Card';
import { Avatar } from '@/shared/ui/Avatar/Avatar';
import { ArticleTextBlock } from '../ArticleTextBlock/ArticleTextBlock';
import { Button } from '@/shared/ui/Button/Button';

export interface ArticleTextBlockProps {
    className?: string;
    article: IArticle;
    view?: ArticleView;
}

export const ArticleListItem = memo((props: ArticleTextBlockProps) => {
    const { className, article, view = ArticleView.LIST } = props;

    const { t } = useTranslation();

    const Types = article.type?.map((type) => (
        <div className={style.type} key={type}>
            {type}
        </div>
    ));

    const Views = (
        <div className={style.views}>
            <div>{article.views}</div>
            <EyeIcon />
        </div>
    );

    if (view === ArticleView.LIST) {
        const contentBlock = article?.blocks?.find((block) => block.type === ArticleBlockType.TEXT);

        return (
            <div className={classNames(style.item, [className, style[view]])}>
                <Card>
                    <div className={style.item__container}>
                        <div className={style.header}>
                            <div className={style.header__user}>
                                <Avatar
                                    className={style.user__avatar}
                                    image={article?.user?.avatar || ''}
                                    borderRadius='50%'
                                    alt={article?.title}
                                />
                                <span className={style.user__name}>{article?.user?.username}</span>
                            </div>
                            <div className={style.header__date}>{article?.createdAt}</div>
                        </div>

                        <h3 className={style.title}>{article?.title}</h3>

                        {Types}

                        <div className={style.img__container}>
                            <img className={style.img} src={article?.img} alt={article?.title} />
                        </div>

                        <div className={style.content}>
                            {contentBlock && (
                                <ArticleTextBlock content={contentBlock as IArticleTextBlock} />
                            )}
                        </div>

                        <div className={style.footer}>
                            <Button label={t('Читать далее...')} />

                            {Views}
                        </div>
                    </div>
                </Card>
            </div>
        );
    }

    return (
        <div className={classNames(style.item, [className, style[view]])}>
            <Card>
                <div className={style.item__container}>
                    <div className={style.img__container}>
                        <img className={style.img} src={article?.img} alt={article?.title} />
                        <div className={style.date}>{article?.createdAt}</div>
                    </div>
                    <div className={style.info__container}>
                        <div className={style.info}>
                            {Types}
                            {Views}
                        </div>
                        <div className={style.title}>{article?.title}</div>
                    </div>
                </div>
            </Card>
        </div>
    );
});
