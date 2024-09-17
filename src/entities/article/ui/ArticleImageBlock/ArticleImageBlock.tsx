import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import style from './ArticleImageBlock.module.scss';

export interface ArticleImageBlockProps {
    className?: string;
}

export const ArticleImageBlock = (props: ArticleImageBlockProps) => {
    const { className } = props;

    const { t } = useTranslation();

    return (
        <div className={classNames(style.articleImageBlock, [className])}>
            <div>{t('ARTICLE IMAGE BLOCK')}</div>
        </div>
    );
};
