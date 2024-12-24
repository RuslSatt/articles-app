import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import style from './CommentList.module.scss';
import { CommentCard } from '@/entities/comment';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';
import { VStack } from '@/shared/ui/Stack/VStack/VStack';
import { HStack } from '@/shared/ui/Stack/HStack/HStack';
import { useAddCommentMutation, useFetchArticleCommentsQuery } from '../api';
import { AddCommentForm } from '@/features/addComment';
import { getUserData } from '@/entities/user';
import { getArticleDetailsData } from '@/entities/article';

export interface CommentListProps {
    className?: string;
    id: string;
}

export const CommentList = memo((props: CommentListProps) => {
    const { className, id } = props;

    const { t } = useTranslation();
    let { data: comments, isLoading } = useFetchArticleCommentsQuery(id);
    const [addComment] = useAddCommentMutation();
    const user = useSelector(getUserData);
    const article = useSelector(getArticleDetailsData);

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

    const onSendComment = async (text: string) => {
        const payload = await addComment({
            text,
            userId: user?.id ?? '',
            articleId: article?.id ?? ''
        });
    };

    return (
        <VStack gap='20' max className={classNames(style.commentList, [className])}>
            <AddCommentForm onSendComment={onSendComment} />
            {content}
        </VStack>
    );
});
