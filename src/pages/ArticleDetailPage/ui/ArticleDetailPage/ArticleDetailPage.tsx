import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
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
} from '../../model/selectors/comments/getArticleCommentsData';
import { useInitialEffect } from '@/shared/lib/hooks/useInitailEffect';
import { getArticleComments } from '../../model/slice/comments/articleCommentsSlice';
import { AddCommentForm } from '@/features/addComment';
import { addArticleComment } from '../../model/services/addArticleComment/addArticleComment';
import { Page } from '@/widgets/Page/Page';
import { ArticleRecommendationsList } from '@/widgets/ArticleRecommedationsList';
import { articleDetailsPageReducer } from '../../model/slice';
// eslint-disable-next-line max-len
import { fetchArticleComments } from '../../model/services/fetchArticleComments/fetchArticleComments';
import { ArticleDetailPageHeader } from '../ArticleDetailPageHeader/ArticleDetailPageHeader';

export interface ArticleDetailPageProps {
    className?: string;
}

const reducersList: ReducersList = {
    articleDetailsPage: articleDetailsPageReducer
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
            <ArticleDetailPageHeader />
            <ArticleDetails id={id} />
            <DynamicReducerLoader reducersList={reducersList}>
                <ArticleRecommendationsList />
                <AddCommentForm onSendComment={onSendComment} />
                <CommentList comments={comments ?? []} isLoading={isLoading} />
            </DynamicReducerLoader>
        </Page>
    );
};

export default ArticleDetailPage;
