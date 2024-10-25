import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import style from './ArticlesPage.module.scss';
import { ArticleList } from '@/widgets/ArticleList';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { fetchArticlesList } from '../model/services/fetchArticlesList/fetchArticlesList';
import {
    getArticlesPageIsLoading,
    getArticlesPageView
} from '../model/selectors/getArticlesPageData';
import { articlesPageReducer, getArticlesList } from '../model/slice/articlesPageSlice';
import {
    DynamicReducerLoader,
    ReducersList
} from '@/shared/lib/DynamicReducerLoader/DynamicReducerLoader';
import { useInitialEffect } from '@/shared/lib/hooks/useInitailEffect';

export interface ArticlesPageProps {
    className?: string;
}

const reducers: ReducersList = {
    articlesPage: articlesPageReducer
};

const ArticlesPage = (props: ArticlesPageProps) => {
    const { className } = props;

    const dispatch = useAppDispatch();

    useInitialEffect(() => {
        dispatch(fetchArticlesList());
    });

    const isLoading = useSelector(getArticlesPageIsLoading);
    const articles = useSelector(getArticlesList.selectAll);
    const view = useSelector(getArticlesPageView);

    return (
        <DynamicReducerLoader reducers={reducers}>
            <div className={classNames(style.articlesPage, [className])}>
                <ArticleList view={view} isLoading={isLoading} articles={articles} />
            </div>
        </DynamicReducerLoader>
    );
};

export default ArticlesPage;
