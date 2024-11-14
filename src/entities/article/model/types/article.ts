import { User } from '@/entities/user';

export enum ArticleSortField {
    VIEWS = 'views',
    TITLE = 'title',
    CREATED_DATE = 'createdAt'
}

export enum ArticleBlockType {
    TEXT = 'TEXT',
    CODE = 'CODE',
    IMAGE = 'IMAGE'
}

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

export enum ArticleType {
    ALL = 'ALL',
    IT = 'IT',
    SCIENCE = 'SCIENCE',
    ECONOMICS = 'ECONOMICS'
}

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

export enum ArticleView {
    LIST = 'list',
    GRID = 'grid'
}
