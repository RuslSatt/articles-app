import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
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
    getArticleDetailCommentsData,
    getArticleDetailCommentsIsLoading
} from '../model/selectors/getArticleDetailsCommentsData';
// eslint-disable-next-line max-len
import { fetchArticleDetailComments } from '../model/services/fetchArticleDetailComments/fetchArticleDetailComments';
import { articleDetailCommentsReducer } from '../model/slice/articleDetailcommentsSlice';

export interface ArticleDetailPageProps {
    className?: string;
}

const reducersList: ReducersList = {
    articleDetailCommentsSchema: articleDetailCommentsReducer
};

const ArticleDetailPage = (props: ArticleDetailPageProps) => {
    const { className } = props;

    const { t } = useTranslation();

    const { id } = useParams<{ id: string }>();

    const dispatch = useAppDispatch();

    const comments = useSelector(getArticleDetailCommentsData);
    const isLoading = useSelector(getArticleDetailCommentsIsLoading);

    useEffect(() => {
        if (__PROJECT__ !== 'storybook' && id) {
            dispatch(fetchArticleDetailComments(id));
        }
    }, [dispatch, id]);

    if (!id) {
        return (
            <div className={classNames(style.articleDetailPage, [className])}>
                {t('ARTICLE NOT FOUND')}
            </div>
        );
    }

    return (
        <div className={classNames(style.articleDetailPage, [className])}>
            <ArticleDetails id={id} />
            <DynamicReducerLoader reducers={reducersList}>
                <CommentList comments={comments ?? []} />
            </DynamicReducerLoader>
        </div>
    );
};

export default ArticleDetailPage;
