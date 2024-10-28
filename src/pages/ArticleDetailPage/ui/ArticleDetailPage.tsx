import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import style from './ArticleDetailPage.module.scss';
import { ArticleDetails } from '@/entities/article';
import { CommentList } from '@/widgets/CommentList';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';

import {
    DynamicReducerLoader,
    ReducersList
} from '@/shared/lib/DynamicReducerLoader/DynamicReducerLoader';
import {
    getArticleCommentsError,
    getArticleCommentsIsLoading
} from '../model/selectors/getArticleCommentsData';
import { fetchArticleComments } from '../model/services/fetchArticleComments/fetchArticleComments';
import { useInitialEffect } from '@/shared/lib/hooks/useInitailEffect';
import { articleCommentsReducer, getArticleComments } from '../model/slice/articleCommentsSlice';
import { AddCommentForm } from '@/features/addComment';
import { addArticleComment } from '../model/services/addArticleComment/addArticleComment';
import { Button } from '@/shared/ui/Button/Button';
import { AppRoutes, RoutePath } from '@/shared/config/router/routerConfig';
import { Page } from '@/shared/ui/Page/Page';

export interface ArticleDetailPageProps {
    className?: string;
}

const reducersList: ReducersList = {
    articleDetailComments: articleCommentsReducer
};

const ArticleDetailPage = (props: ArticleDetailPageProps) => {
    const { className } = props;

    const { t } = useTranslation();

    const { id } = useParams<{ id: string }>();

    const dispatch = useAppDispatch();

    const comments = useSelector(getArticleComments.selectAll);
    const isLoading = useSelector(getArticleCommentsIsLoading);
    const error = useSelector(getArticleCommentsError);

    useInitialEffect(() => {
        dispatch(fetchArticleComments(id));
    });

    const navigate = useNavigate();

    const onBackToList = useCallback(() => {
        navigate(RoutePath[AppRoutes.ARTICLES]);
    }, [navigate]);

    if (!id) {
        return (
            <Page className={classNames(style.articleDetailPage, [className])}>
                {t('ARTICLE NOT FOUND')}
            </Page>
        );
    }

    const onSendComment = (text: string) => {
        dispatch(addArticleComment(text));
    };

    return (
        <Page className={classNames(style.articleDetailPage, [className])}>
            <Button className={style.button} label={t('Назад к списку')} onClick={onBackToList} />
            <ArticleDetails id={id} />
            <DynamicReducerLoader reducers={reducersList}>
                <AddCommentForm onSendComment={onSendComment} />
                <CommentList comments={comments ?? []} isLoading={isLoading} />
            </DynamicReducerLoader>
        </Page>
    );
};

export default ArticleDetailPage;
