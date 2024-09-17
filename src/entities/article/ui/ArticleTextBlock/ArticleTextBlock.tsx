import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import style from './ArticleCodeBlock.module.scss';

export interface ArticleTextBlockProps {
    className?: string;
}

export const ArticleTextBlock = (props: ArticleTextBlockProps) => {
    const { className } = props;

    const { t } = useTranslation();

    return (
        <div className={classNames(style.articleTextBlock, [className])}>
            <div>{t('ARTICLE TEXT BLOCK')}</div>
        </div>
    );
};
