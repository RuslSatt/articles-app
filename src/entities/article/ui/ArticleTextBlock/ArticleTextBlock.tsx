import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import style from './ArticleTextBlock.module.scss';
import { IArticleTextBlock } from '../../model/types/article';

export interface ArticleTextBlockProps {
    className?: string;
    content: IArticleTextBlock;
}

export const ArticleTextBlock = memo((props: ArticleTextBlockProps) => {
    const { className, content } = props;

    return (
        <div className={classNames(style.articleTextBlock, [className])}>
            {content?.title && <h3 className={style.title}>{content?.title}</h3>}
            <div>
                {content?.paragraphs?.map((paragraph) => (
                    <p className={style.paragraph} key={paragraph}>
                        {paragraph}
                    </p>
                ))}
            </div>
        </div>
    );
});
