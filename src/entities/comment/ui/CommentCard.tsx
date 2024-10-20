import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import style from './CommentCard.module.scss';
import { IComment } from '../model/types/comment';
import { Avatar, AvatarSize } from '@/shared/ui/Avatar/Avatar';

export interface CommentCardProps {
    className?: string;
    comment: IComment;
}

export const CommentCard = memo((props: CommentCardProps) => {
    const { className, comment } = props;

    const t = useTranslation();

    return (
        <li className={classNames(style.commentCard, [className])}>
            <div className={style.user}>
                <Avatar size={AvatarSize.SMALL} image={comment?.user?.avatar || ''} />
                <span>{comment?.user?.username}</span>
            </div>
            <p>{comment?.text}</p>
        </li>
    );
});