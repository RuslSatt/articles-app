import { Popover as HPopover } from '@headlessui/react';
import { ReactNode } from 'react';
import style from './Popover.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import popupStyle from '../../styles/Popups.module.scss';
import { directionClasses, PopupDirection } from '../../styles/consts';

export interface PopoverProps {
    className?: string;
    children?: ReactNode;
    direction?: PopupDirection;
    trigger: ReactNode;
}

export const Popover = (props: PopoverProps) => {
    const { className, children, direction = 'bottom-left', trigger } = props;

    return (
        <HPopover as='div' className={classNames(style.popover, [className])}>
            <HPopover.Button as='div' className={style.button}>
                {trigger}
            </HPopover.Button>
            <HPopover.Panel
                className={classNames(popupStyle.items, [directionClasses[direction], style.items])}
            >
                {children}
            </HPopover.Panel>
        </HPopover>
    );
};
