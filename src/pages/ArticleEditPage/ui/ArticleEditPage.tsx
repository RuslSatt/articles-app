import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { useParams } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames/classNames';
import style from './ArticleEditPage.module.scss';
import { Page } from '@/widgets/Page/Page';

export interface ArticleEditPageProps {
    className?: string;
}

const ArticleEditPage = memo((props: ArticleEditPageProps) => {
    const { className } = props;

    const { t } = useTranslation();
    const { id } = useParams<{ id: string }>();
    const isEdit = Boolean(id);

    return (
        <Page className={classNames(style.articleEditPage, [className])}>
            {isEdit ? `${t('Редактирование статьи')} - ID ${id}` : t('Создание статьи')}
        </Page>
    );
});

export default ArticleEditPage;
