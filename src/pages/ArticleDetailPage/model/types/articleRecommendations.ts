export interface IArticleRecommendationsSchema {
    ids: string[];
    entities: Record<string, any>;
    isLoading: boolean;
    error?: string;
}
