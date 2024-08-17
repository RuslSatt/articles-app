import { FC } from 'react';
import style from './Avatar.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';

export enum AvatarSize {
    NORMAL = 'normal',
    SMALL = 'small',
    LARGE = 'large'
}

export interface AvatarProps {
    className?: string;
    size?: AvatarSize;
    image?: string;
    alt?: string;
}

export const Avatar: FC<AvatarProps> = (props) => {
    const { className, size = AvatarSize.NORMAL, image, alt } = props;

    return (
        <div className={classNames(style.avatar, [className, style[size]])}>
            {image && <img src={image} alt={alt} />}
        </div>
    );
};
