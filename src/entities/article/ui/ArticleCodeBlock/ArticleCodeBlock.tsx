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

    return (
        <div className={classNames(style.articleCodeBlock, [className])}>
            <code className={style.code}>{content.code}</code>
        </div>
    );
});
