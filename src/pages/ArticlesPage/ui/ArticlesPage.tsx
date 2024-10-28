import { useSelector } from 'react-redux';
import { useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import style from './ArticlesPage.module.scss';
import { ArticleList } from '@/widgets/ArticleList';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { fetchArticlesList } from '../model/services/fetchArticlesList/fetchArticlesList';
import {
    getArticlesPageHasMore,
    getArticlesPageIsLoading,
    getArticlesPagePage,
    getArticlesPageView
} from '../model/selectors/getArticlesPageData';
import {
    articlesPageActions,
    articlesPageReducer,
    getArticlesList
} from '../model/slice/articlesPageSlice';
import {
    DynamicReducerLoader,
    ReducersList
} from '@/shared/lib/DynamicReducerLoader/DynamicReducerLoader';
import { useInitialEffect } from '@/shared/lib/hooks/useInitailEffect';
import { ArticleViewSelector } from '@/features/articleViewSelector';
import { ArticleView } from '@/entities/article';
import { Page } from '@/shared/ui/Page/Page';

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
    const page = useSelector(getArticlesPagePage);
    const hasMore = useSelector(getArticlesPageHasMore);

    const onLoadNextPart = useCallback(() => {
        if (!hasMore || isLoading) return;
        dispatch(articlesPageActions.setPage(page + 1));
        dispatch(
            fetchArticlesList({
                page: page + 1
            })
        );
    }, [dispatch, hasMore, isLoading, page]);

    useInitialEffect(() => {
        dispatch(articlesPageActions.init());
        dispatch(
            fetchArticlesList({
                page: 1
            })
        );
    });

    const onChangeView = useCallback(
        (view?: ArticleView) => {
            if (!view) return;
            dispatch(articlesPageActions.setView(view));
        },
        [dispatch]
    );

    return (
        <DynamicReducerLoader reducers={reducers}>
            <Page
                onScrollEnd={onLoadNextPart}
                className={classNames(style.articlesPage, [className])}
            >
                <header className={style.header}>
                    <ArticleViewSelector onChangeView={onChangeView} />
                </header>
                <ArticleList view={view} isLoading={isLoading} articles={articles} />
            </Page>
        </DynamicReducerLoader>
    );
};

export default ArticlesPage;
