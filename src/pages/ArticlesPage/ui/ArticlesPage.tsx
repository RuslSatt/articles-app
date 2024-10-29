import { useSelector } from 'react-redux';
import { useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import style from './ArticlesPage.module.scss';
import { ArticleList } from '@/widgets/ArticleList';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { fetchArticlesList } from '../model/services/fetchArticlesList/fetchArticlesList';
import {
    getArticlesPageIsLoading,
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
// eslint-disable-next-line max-len
import { fetchNextArticlesPage } from '../model/services/fetchNextArticlesPage/fetchNextArticlesPage';

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

    const onLoadNextPart = useCallback(() => {
        dispatch(fetchNextArticlesPage());
    }, [dispatch]);

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
