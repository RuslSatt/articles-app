import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import style from './CommentList.module.scss';
import { IComment } from '@/entities/comment';
import { CommentCard } from '@/entities/comment/ui/CommentCard';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';

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
            <div className={style.skeleton}>
                <div className={style.skeleton_user}>
                    <Skeleton width={32} height={32} />
                    <Skeleton width={100} height={32} />
                </div>
                <Skeleton width='100%' height={32} />
                <Skeleton width='100%' height={32} />
            </div>
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

    return <div className={classNames(style.commentList, [className])}>{content}</div>;
});
