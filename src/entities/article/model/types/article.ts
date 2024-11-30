import { User } from '@/entities/user';
import { ArticleBlockType, ArticleType } from '../consts/consts';

export interface IArticleBlockBase {
    id: string;
    type: string;
}

export interface IArticleTextBlock extends IArticleBlockBase {
    type: ArticleBlockType.TEXT;
    title?: string;
    paragraphs: string[];
}

export interface IArticleCodeBlock extends IArticleBlockBase {
    type: ArticleBlockType.CODE;
    code: string;
}

export interface IArticleImageBlock extends IArticleBlockBase {
    type: ArticleBlockType.IMAGE;
    src: string;
    title: string;
}

export type ArticleBlock = IArticleTextBlock | IArticleCodeBlock | IArticleImageBlock;

export interface IArticle {
    id: string;
    title: string;
    subtitle: string;
    img: string;
    views: number;
    createdAt: string;
    user: User;
    type: ArticleType[];
    blocks: ArticleBlock[];
}

export interface ArticleDetailsSchema {
    data?: IArticle;
    isLoading?: boolean;
    error?: string;
}
