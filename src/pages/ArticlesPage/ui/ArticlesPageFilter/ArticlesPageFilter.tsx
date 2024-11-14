import { useSelector } from 'react-redux';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import style from './ArticlesPageFilter.module.scss';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import {
    getArticlesPageOrder,
    getArticlesPageSearch,
    getArticlesPageSort,
    getArticlesPageType
} from '../../model/selectors/getArticlesPageData';
import { articlesPageActions } from '../../model/slice/articlesPageSlice';
import { ArticleViewSelector } from '@/features/articleViewSelector';
import { ArticleSortField, ArticleType, ArticleView } from '@/entities/article';
import { Input } from '@/shared/ui/Input/Input';
import { ArticleSortSelector } from '@/features/articleSortSelector';
import { SortOrder } from '@/shared/types/sort';
import { fetchArticlesList } from '../../model/services/fetchArticlesList/fetchArticlesList';
import { useDebounce } from '@/shared/lib/hooks/useDebounce';
import { ArticleTypeSelector } from '@/features/articleTypeSelector';

export interface ArticlesPageFilterProps {
    className?: string;
}

export const ArticlesPageFilter = (props: ArticlesPageFilterProps) => {
    const { className } = props;

    const dispatch = useAppDispatch();

    const sort = useSelector(getArticlesPageSort);
    const order = useSelector(getArticlesPageOrder);
    const search = useSelector(getArticlesPageSearch);
    const type = useSelector(getArticlesPageType);

    const { t } = useTranslation();

    const fetchData = useCallback(() => {
        dispatch(fetchArticlesList({ replace: true }));
    }, [dispatch]);

    const debounceFetchData = useDebounce(fetchData, 500);

    const onChangeView = useCallback(
        (view: ArticleView) => {
            dispatch(articlesPageActions.setView(view));
            fetchData();
        },
        [dispatch, fetchData]
    );

    const onChangeSort = useCallback(
        (sort: ArticleSortField) => {
            dispatch(articlesPageActions.setSort(sort));
            dispatch(articlesPageActions.setPage(1));
            fetchData();
        },
        [dispatch, fetchData]
    );

    const onChangeOrder = useCallback(
        (order: SortOrder) => {
            dispatch(articlesPageActions.setOrder(order));
            dispatch(articlesPageActions.setPage(1));
            fetchData();
        },
        [dispatch, fetchData]
    );

    const onChangeSearch = useCallback(
        (search: string) => {
            dispatch(articlesPageActions.setSearch(search));
            dispatch(articlesPageActions.setPage(1));
            debounceFetchData();
        },
        [dispatch, debounceFetchData]
    );

    const onChangeType = useCallback(
        (value: ArticleType) => {
            dispatch(articlesPageActions.setPage(1));
            dispatch(articlesPageActions.setType(value));
            fetchData();
        },
        [dispatch, fetchData]
    );

    return (
        <div className={classNames(style.articlesPageFilter, [className])}>
            <div className={style.sort}>
                <ArticleSortSelector
                    sort={sort}
                    order={order}
                    onChangeOrder={onChangeOrder}
                    onChangeSort={onChangeSort}
                />
                <ArticleViewSelector onChangeView={onChangeView} />
            </div>
            <div className={style.search}>
                <Input onChange={onChangeSearch} value={search} placeholder={t('Поиск...')} />
            </div>
            <div className={style.tabs}>
                <ArticleTypeSelector type={type} onChangeType={onChangeType} />
            </div>
        </div>
    );
};
