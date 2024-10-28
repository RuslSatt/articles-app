import { EntityState } from '@reduxjs/toolkit';
import { ArticleView, IArticle } from '@/entities/article';

export interface IArticlePageSchema extends EntityState<IArticle> {
    isLoading: boolean;
    error?: string;
    view: ArticleView;
    page: number;
    hasMore: boolean;
    limit?: number;
}
