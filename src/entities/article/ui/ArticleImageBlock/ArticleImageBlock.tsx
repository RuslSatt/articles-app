import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import style from './ArticleImageBlock.module.scss';
import { IArticleImageBlock } from '../../model/types/article';

export interface ArticleImageBlockProps {
    className?: string;
    content: IArticleImageBlock;
}

export const ArticleImageBlock = memo((props: ArticleImageBlockProps) => {
    const { className, content } = props;

    const { t } = useTranslation();

    return (
        <div className={classNames(style.articleImageBlock, [className])}>
            <img className={style.img} src={content?.src} alt={content?.title} />
            <div className={style.title}>{content?.title}</div>
        </div>
    );
});
