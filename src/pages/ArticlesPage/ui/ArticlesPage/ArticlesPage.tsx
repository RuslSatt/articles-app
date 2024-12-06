import { useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames/classNames';
import style from './ArticlesPage.module.scss';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { articlesPageReducer } from '../../model/slice/articlesPageSlice';
import {
    DynamicReducerLoader,
    ReducersList
} from '@/shared/lib/components/DynamicReducerLoader/DynamicReducerLoader';
import { useInitialEffect } from '@/shared/lib/hooks/useInitailEffect';
import { Page } from '@/widgets/Page/ui/Page';
// eslint-disable-next-line max-len
import { fetchNextArticlesPage } from '../../model/services/fetchNextArticlesPage/fetchNextArticlesPage';
import { initArticlesPage } from '../../model/services/initArticlesPage/initArticlesPage';
import { ArticlesPageFilter } from '../ArticlesPageFilter/ArticlesPageFilter';
import { ArticleInfinityList } from '../ArticleInfinityList/ArticleInfinityList';

export interface ArticlesPageProps {
    className?: string;
}

const reducers: ReducersList = {
    articlesPage: articlesPageReducer
};

const ArticlesPage = (props: ArticlesPageProps) => {
    const { className } = props;

    const dispatch = useAppDispatch();

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
                <ArticleInfinityList />
            </Page>
        </DynamicReducerLoader>
    );
};

export default ArticlesPage;
