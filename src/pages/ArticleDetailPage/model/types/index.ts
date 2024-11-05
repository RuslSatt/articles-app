import { IArticleCommentsSchema } from './articleComments';
import { IArticleRecommendationsSchema } from './articleRecommendations';

export interface IArticleDetailsPageSchema {
    comments?: IArticleCommentsSchema;
    recommendations?: IArticleRecommendationsSchema;
}
