import { EntityState } from '@reduxjs/toolkit';
import { IComment } from '@/entities/comment';

export interface IArticleCommentsSchema extends EntityState<IComment> {
    isLoading?: boolean;
    error?: string;
}
