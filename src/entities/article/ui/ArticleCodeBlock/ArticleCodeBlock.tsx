import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import style from './ArticleCodeBlock.module.scss';
import { IArticleCodeBlock } from '../../model/types/article';

export interface ArticleCodeBlockProps {
    className?: string;
    content: IArticleCodeBlock;
}

export const ArticleCodeBlock = memo((props: ArticleCodeBlockProps) => {
    const { className, content } = props;

    const { t } = useTranslation();

    return (
        <div className={classNames(style.articleCodeBlock, [className])}>
            <div>{content.code}</div>
        </div>
    );
});
