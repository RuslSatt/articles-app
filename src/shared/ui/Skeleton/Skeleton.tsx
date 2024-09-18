import { CSSProperties } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import style from './Skeleton.module.scss';

export interface SkeletonProps {
    className?: string;
    width?: string | number;
    height?: string | number;
    borderRadius?: string;
}

export const Skeleton = (props: SkeletonProps) => {
    const { className, width, height, borderRadius } = props;

    const propsStyles: CSSProperties = {
        width,
        height,
        borderRadius
    };

    return <div style={propsStyles} className={classNames(style.skeleton, [className])} />;
};
