import { useSelector } from 'react-redux';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import style from './ArticlesPageFilter.module.scss';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import {
    getArticlesPageOrder,
    getArticlesPageSort,
    getArticlesPageView
} from '../../model/selectors/getArticlesPageData';
import { articlesPageActions } from '../../model/slice/articlesPageSlice';
import { ArticleViewSelector } from '@/features/articleViewSelector';
import { ArticleSortField, ArticleView } from '@/entities/article';
import { Input } from '@/shared/ui/Input/Input';
import { ArticleSortSelector } from '@/features/articleSortSelector';
import { SortOrder } from '@/shared/types/sort';

export interface ArticlesPageFilterProps {
    className?: string;
}

export const ArticlesPageFilter = (props: ArticlesPageFilterProps) => {
    const { className } = props;

    const dispatch = useAppDispatch();

    const sort = useSelector(getArticlesPageSort);
    const order = useSelector(getArticlesPageOrder);
    const view = useSelector(getArticlesPageView);

    const { t } = useTranslation();

    const onChangeView = useCallback(
        (view?: ArticleView) => {
            if (!view) return;
            dispatch(articlesPageActions.setView(view));
        },
        [dispatch]
    );

    const onChangeSort = useCallback(
        (sort: ArticleSortField) => {
            if (!sort) return;
            dispatch(articlesPageActions.setSort(sort));
        },
        [dispatch]
    );

    const onChangeOrder = useCallback(
        (order: SortOrder) => {
            if (!order) return;
            dispatch(articlesPageActions.setOrder(order));
        },
        [dispatch]
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
                <Input placeholder={t('Поиск...')} />
            </div>
        </div>
    );
};
