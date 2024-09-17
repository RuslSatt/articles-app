import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import style from './ArticleDetails.module.scss';

export interface ArticleDetailsProps {
    className?: string;
}

export const ArticleDetails = (props: ArticleDetailsProps) => {
    const { className } = props;

    const { t } = useTranslation();

    return (
        <div className={classNames(style.articleDetails, [className])}>
            <div>{t('ARTICLE DETAILS')}</div>
        </div>
    );
};
