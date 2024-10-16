import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import style from './ArticleCodeBlock.module.scss';
import { IArticleCodeBlock } from '../../model/types/article';
import { Code } from '@/shared/ui/Code/Code';

export interface ArticleCodeBlockProps {
    className?: string;
    content: IArticleCodeBlock;
}

export const ArticleCodeBlock = memo((props: ArticleCodeBlockProps) => {
    const { className, content } = props;

    return (
        <div className={classNames(style.articleCodeBlock, [className])}>
            <Code text={content?.code} />
        </div>
    );
});
