import { useSelector } from 'react-redux';
import { ArticleList } from '@/widgets/ArticleList';
import {
    getArticlesPageIsLoading,
    getArticlesPageView
} from '../../model/selectors/getArticlesPageData';
import { getArticlesList } from '../../model/slice/articlesPageSlice';

export interface ArticleInfinityListProps {
    className?: string;
}

export const ArticleInfinityList = (props: ArticleInfinityListProps) => {
    const { className } = props;

    const isLoading = useSelector(getArticlesPageIsLoading);
    const articles = useSelector(getArticlesList.selectAll);
    const view = useSelector(getArticlesPageView);

    return (
        <ArticleList className={className} view={view} isLoading={isLoading} articles={articles} />
    );
};
