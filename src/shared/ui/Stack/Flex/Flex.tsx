import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';
import style from './Flex.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';

type FlexJustify = 'center' | 'start' | 'end' | 'between' | 'around';
type FlexAlign = 'center' | 'start' | 'end';
type FlexDirection = 'row' | 'column';
type FlexGap = '5' | '10' | '15' | '20' | '30';

type DivProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

type Tag =
    | 'div'
    | 'span'
    | 'p'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'section'
    | 'header'
    | 'footer';

export interface FlexProps extends DivProps {
    className?: string;
    children?: ReactNode;
    justifyContent?: FlexJustify;
    alignItems?: FlexAlign;
    direction?: FlexDirection;
    gap?: FlexGap;
    tag?: Tag;
}

const justifyClasses: Record<FlexJustify, string> = {
    center: style.justifyCenter,
    start: style.justifyStart,
    end: style.justifyEnd,
    between: style.justifyBetween,
    around: style.justifyAround
};

const alignClasses: Record<FlexAlign, string> = {
    center: style.alignCenter,
    start: style.alignStart,
    end: style.alignEnd
};

const directionClasses: Record<FlexDirection, string> = {
    row: style.directionRow,
    column: style.directionColumn
};

const gapClasses: Record<FlexGap, string> = {
    5: style.gap5,
    10: style.gap10,
    15: style.gap15,
    20: style.gap20,
    30: style.gap30
};

export const Flex = (props: FlexProps) => {
    const {
        className,
        children,
        justifyContent = 'start',
        alignItems = 'center',
        direction = 'row',
        gap,
        tag
    } = props;

    const classes = [
        className,
        justifyClasses[justifyContent],
        alignClasses[alignItems],
        directionClasses[direction],
        gap && gapClasses[gap]
    ];

    const Element = tag ?? 'div';

    return <Element className={classNames(style.flex, classes)}>{children}</Element>;
};
