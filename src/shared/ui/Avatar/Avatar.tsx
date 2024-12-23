import { CSSProperties, FC } from 'react';
import style from './Avatar.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppImage } from '../AppImage/AppImage';
import { Skeleton } from '../Skeleton/Skeleton';

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
    width?: string;
    height?: string;
    borderRadius?: string;
}

export const Avatar: FC<AvatarProps> = (props) => {
    const { className, size = AvatarSize.NORMAL, image, alt, width, height, borderRadius } = props;

    const cssStyles: CSSProperties = {
        width,
        height,
        borderRadius
    };

    return (
        <div style={cssStyles} className={classNames(style.avatar, [className, style[size]])}>
            {image && (
                <AppImage
                    fallback={<Skeleton width={width} height={height} />}
                    src={image}
                    alt={alt}
                />
            )}
        </div>
    );
};
