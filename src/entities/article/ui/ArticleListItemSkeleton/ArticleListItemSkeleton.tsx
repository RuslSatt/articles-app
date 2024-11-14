import { memo } from 'react';
import { ArticleView } from '../../model/types/article';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';

export interface ArticleListItemSkeletonProps {
    view?: ArticleView;
}

export const ArticleListItemSkeleton = memo((props: ArticleListItemSkeletonProps) => {
    const { view = ArticleView.LIST } = props;

    if (view === ArticleView.LIST) {
        return (
            <>
                <Skeleton width='100%' height={300} />
                <Skeleton width='100%' height={300} />
                <Skeleton width='100%' height={300} />
            </>
        );
    }

    return (
        <>
            <Skeleton width='200px' height='300px' />
            <Skeleton width='200px' height='300px' />
            <Skeleton width='200px' height='300px' />
        </>
    );
});
