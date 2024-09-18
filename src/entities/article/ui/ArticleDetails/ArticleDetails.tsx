import { useTranslation } from 'react-i18next';
import { memo, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import style from './ArticleDetails.module.scss';
import {
    DynamicReducerLoader,
    ReducersList
} from '@/shared/lib/DynamicReducerLoader/DynamicReducerLoader';
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById';
import {
    getArticleDetailsData,
    getArticleDetailsError,
    getArticleDetailsIsLoading
} from '../../model/selectors/articleDetails';
import { Message, Severity } from '@/shared/ui/Message/Message';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';

export interface ArticleDetailsProps {
    className?: string;
    id: string;
}

const reducersList: ReducersList = {
    articleDetails: articleDetailsReducer
};

export const ArticleDetails = memo((props: ArticleDetailsProps) => {
    const { className, id } = props;

    const { t } = useTranslation();

    const dispatch = useAppDispatch();

    const data = useSelector(getArticleDetailsData);
    const isLoading = useSelector(getArticleDetailsIsLoading);
    const error = useSelector(getArticleDetailsError);

    useEffect(() => {
        dispatch(fetchArticleById(id));
    }, [dispatch, id]);

    let content;

    if (isLoading) {
        content = (
            <div className={style.skeleton}>
                <Skeleton width={200} height={200} borderRadius='50%' />
                <Skeleton width={300} height={32} />
                <Skeleton width={300} height={32} />
                <Skeleton width={600} height={32} />
                <Skeleton width={600} height={32} />
            </div>
        );
    } else if (error) {
        content = (
            <Message severity={Severity.ERROR} text={t('Произошла ошибка при загрузке статьи')} />
        );
    } else {
        content = <div>{t('ARTICLE DETAILS')}</div>;
    }

    return (
        <DynamicReducerLoader reducers={reducersList}>
            <div className={classNames(style.articleDetails, [className])}>{content}</div>
        </DynamicReducerLoader>
    );
});
