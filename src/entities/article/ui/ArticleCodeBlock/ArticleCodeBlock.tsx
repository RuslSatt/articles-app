import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import style from './ArticleCodeBlock.module.scss';

export interface ArticleCodeBlockProps {
    className?: string;
}

export const ArticleCodeBlock = (props: ArticleCodeBlockProps) => {
    const { className } = props;

    const { t } = useTranslation();

    return (
        <div className={classNames(style.articleCodeBlock, [className])}>
            <div>{t('ARTICLE CODE BLOCK')}</div>
        </div>
    );
};
