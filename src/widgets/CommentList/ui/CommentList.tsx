import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import style from './CommentList.module.scss';
import { IComment } from '@/entities/comment';
import { CommentCard } from '@/entities/comment/ui/CommentCard';

export interface CommentListProps {
    className?: string;
    comments: IComment[];
}

export const CommentList = memo((props: CommentListProps) => {
    const { className, comments } = props;

    const { t } = useTranslation();

    let content;

    console.log(comments);

    if (!comments?.length) {
        content = <p>{t('Комментарии отсутствуют')}</p>;
    } else {
        content = (
            <ul className={style.list}>
                {comments?.map((comment) => <CommentCard key={comment.id} comment={comment} />)}
            </ul>
        );
    }

    return (
        <div className={classNames(style.commentList, [className])}>
            {comments?.length > 0 ? (
                <ul className={style.list}>
                    {comments?.map((comment) => <CommentCard key={comment.id} comment={comment} />)}
                </ul>
            ) : (
                <p>{t('Комментарии отсутствуют')}</p>
            )}
        </div>
    );
});
