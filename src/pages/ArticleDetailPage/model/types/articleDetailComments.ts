import { EntityState } from '@reduxjs/toolkit';
import { IComment } from '@/entities/comment';

export interface IArticleDetailCommentsSchema extends EntityState<IComment> {
    isLoading?: boolean;
    error?: string;
}
