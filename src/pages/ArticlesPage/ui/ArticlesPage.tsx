import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import style from './ArticlesPage.module.scss';

export interface ArticlesPageProps {
    className?: string;
}

const ArticlesPage = (props: ArticlesPageProps) => {
    const { className } = props;

    const { t } = useTranslation();

    return (
        <div className={classNames(style.articlesPage, [className])}>
            <div>{t('ARTICLES PAGE')}</div>
        </div>
    );
};

export default ArticlesPage;
