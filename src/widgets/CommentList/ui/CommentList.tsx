import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import style from './CommentList.module.scss';
import { IComment } from '@/entities/comment';
import { CommentCard } from '@/entities/comment/ui/CommentCard';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';
import { VStack } from '@/shared/ui/Stack/VStack/VStack';
import { HStack } from '@/shared/ui/Stack/HStack/HStack';

export interface CommentListProps {
    className?: string;
    comments: IComment[];
    isLoading?: boolean;
}

export const CommentList = memo((props: CommentListProps) => {
    const { className, comments, isLoading } = props;

    const { t } = useTranslation();

    let content;

    if (isLoading) {
        content = (
            <VStack gap='15' className={style.skeleton}>
                <HStack gap='10'>
                    <Skeleton width={32} height={32} />
                    <Skeleton width={100} height={32} />
                </HStack>
                <Skeleton width='100%' height={32} />
                <Skeleton width='100%' height={32} />
            </VStack>
        );
    } else if (!comments?.length) {
        content = <p>{t('Комментарии отсутствуют')}</p>;
    } else {
        content = (
            <ul className={style.list}>
                {comments?.map((comment) => <CommentCard key={comment.id} comment={comment} />)}
            </ul>
        );
    }

    return <VStack className={classNames(style.commentList, [className])}>{content}</VStack>;
});
