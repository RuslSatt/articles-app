import { useSelector } from 'react-redux';
import { useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames/classNames';
import style from './ArticlesPage.module.scss';
import { ArticleList } from '@/widgets/ArticleList';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import {
    getArticlesPageIsLoading,
    getArticlesPageView
} from '../../model/selectors/getArticlesPageData';
import { articlesPageReducer, getArticlesList } from '../../model/slice/articlesPageSlice';
import {
    DynamicReducerLoader,
    ReducersList
} from '@/shared/lib/DynamicReducerLoader/DynamicReducerLoader';
import { useInitialEffect } from '@/shared/lib/hooks/useInitailEffect';
import { Page } from '@/widgets/Page/Page';
// eslint-disable-next-line max-len
import { fetchNextArticlesPage } from '../../model/services/fetchNextArticlesPage/fetchNextArticlesPage';
import { initArticlesPage } from '../../model/services/initArticlesPage/initArticlesPage';
import { ArticlesPageFilter } from '../ArticlesPageFilter/ArticlesPageFilter';

export interface ArticlesPageProps {
    className?: string;
}

const reducers: ReducersList = {
    articlesPage: articlesPageReducer
};

const ArticlesPage = (props: ArticlesPageProps) => {
    const { className } = props;

    const dispatch = useAppDispatch();

    const isLoading = useSelector(getArticlesPageIsLoading);
    const articles = useSelector(getArticlesList.selectAll);
    const view = useSelector(getArticlesPageView);

    const [searchParams] = useSearchParams();

    const onLoadNextPart = useCallback(() => {
        dispatch(fetchNextArticlesPage());
    }, [dispatch]);

    useInitialEffect(() => {
        dispatch(initArticlesPage(searchParams));
    });

    return (
        <DynamicReducerLoader reducersList={reducers} removeAfterUnmount={false}>
            <Page
                onScrollEnd={onLoadNextPart}
                className={classNames(style.articlesPage, [className])}
            >
                <header className={style.header}>
                    <ArticlesPageFilter />
                </header>
                <ArticleList view={view} isLoading={isLoading} articles={articles} />
            </Page>
        </DynamicReducerLoader>
    );
};

export default ArticlesPage;
