import { IComment } from '@/entities/comment';

export interface IArticleDetailCommentsSchema {
    data?: IComment[];
    isLoading?: boolean;
    error?: string;
}
