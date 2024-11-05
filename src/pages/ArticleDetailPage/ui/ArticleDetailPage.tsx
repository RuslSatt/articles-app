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
} from '../model/selectors/comments/getArticleCommentsData';
import { fetchArticleComments } from '../model/services/fetchArticleComments/fetchArticleComments';
import { useInitialEffect } from '@/shared/lib/hooks/useInitailEffect';
import {
    articleCommentsReducer,
    getArticleComments
} from '../model/slice/comments/articleCommentsSlice';
import { AddCommentForm } from '@/features/addComment';
import { addArticleComment } from '../model/services/addArticleComment/addArticleComment';
import { Button } from '@/shared/ui/Button/Button';
import { AppRoutes, RoutePath } from '@/shared/config/router/routerConfig';
import { Page } from '@/widgets/Page/Page';
// eslint-disable-next-line max-len
import {
    articleRecommendationsReducer,
    getArticleRecommendations
} from '../model/slice/recommendations/articleRecommendationsSlice';
import { ArticleRecommendationsList } from '@/widgets/ArticleRecommedationsList';
// eslint-disable-next-line max-len
import { fetchArticleRecommendations } from '../model/services/fetchArticleRecommendations/fetchArticleRecommendations';
// eslint-disable-next-line max-len
import { getArticleRecommendationsIsLoading } from '../model/selectors/recommendations/getRecommendationsData';

export interface ArticleDetailPageProps {
    className?: string;
}

const reducersList: ReducersList = {
    articleDetailComments: articleCommentsReducer,
    articleRecommendations: articleRecommendationsReducer
};

const ArticleDetailPage = (props: ArticleDetailPageProps) => {
    const { className } = props;

    const { t } = useTranslation();

    const { id } = useParams<{ id: string }>();

    const dispatch = useAppDispatch();

    const comments = useSelector(getArticleComments.selectAll);
    const recommendations = useSelector(getArticleRecommendations.selectAll);
    const recommendationsIsLoading = useSelector(getArticleRecommendationsIsLoading);
    const isLoading = useSelector(getArticleCommentsIsLoading);
    const error = useSelector(getArticleCommentsError);

    useInitialEffect(() => {
        dispatch(fetchArticleComments(id));
        dispatch(fetchArticleRecommendations());
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
            <DynamicReducerLoader reducersList={reducersList}>
                <ArticleRecommendationsList
                    articles={recommendations}
                    isLoading={recommendationsIsLoading}
                />
                <AddCommentForm onSendComment={onSendComment} />
                <CommentList comments={comments ?? []} isLoading={isLoading} />
            </DynamicReducerLoader>
        </Page>
    );
};

export default ArticleDetailPage;
