import React, { memo } from 'react';
import style from './Icon.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';

interface IconProps extends React.SVGProps<SVGSVGElement> {
    className?: string;
    Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
    inverted?: boolean;
}

export const Icon = memo((props: IconProps) => {
    const { className, Svg, ...properties } = props;

    return <Svg className={classNames(style.Icon, [className])} {...properties} />;
});
