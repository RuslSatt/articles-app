export type { IArticle } from './model/types/article';
export { ArticleDetails } from './ui/ArticleDetails/ArticleDetails';
export type { ArticleDetailsSchema as ArticleSchema } from './model/types/article';
export { articleDetailsReducer } from './model/slice/articleDetailsSlice';
export { getArticleDetailsData } from './model/selectors/articleDetails';
export { ArticleListItem } from './ui/ArticleListItem/ArticleListItem';
export { ArticleListItemSkeleton } from './ui/ArticleListItemSkeleton/ArticleListItemSkeleton';

export {
    ArticleType,
    ArticleBlockType,
    ArticleView,
    ArticleSortField
} from './model/consts/consts';
