import { EntityState } from '@reduxjs/toolkit';
import { ArticleSortField, ArticleType, ArticleView, IArticle } from '@/entities/article';
import { SortOrder } from '@/shared/types/sort';

export interface IArticlePageSchema extends EntityState<IArticle> {
    isLoading: boolean;
    error?: string;
    page: number;
    hasMore: boolean;
    limit: number;

    // filters

    view: ArticleView;
    order: SortOrder;
    sort: ArticleSortField;
    search: string;
    type: ArticleType;

    _mounted?: boolean;
}
