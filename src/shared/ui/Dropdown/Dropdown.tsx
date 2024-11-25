import { Menu } from '@headlessui/react';
import { Fragment, memo, ReactNode } from 'react';
import style from './Dropdown.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppLink } from '../AppLink/AppLink';

export type DropdownDirection = 'bottom-left' | 'bottom-right' | 'top-left' | 'top-right';

export interface DropdownItem {
    id: string;
    href?: string;
    name: string;
    disabled?: boolean;
    onClick?: () => void;
}

export interface DropdownProps {
    className?: string;
    items: DropdownItem[];
    trigger: ReactNode;
    direction?: DropdownDirection;
}

const directionClasses: Record<DropdownDirection, string> = {
    'bottom-left': style['bottom-left'],
    'bottom-right': style['bottom-right'],
    'top-left': style['top-left'],
    'top-right': style['top-right']
};

export const Dropdown = memo((props: DropdownProps) => {
    const { className, items = [], trigger, direction = 'bottom-left' } = props;

    return (
        <Menu as='div' className={classNames(style.dropdown, [className])}>
            <Menu.Button className={style.trigger}>{trigger}</Menu.Button>
            <Menu.Items className={classNames(style.items, [directionClasses[direction]])}>
                {items.map((item) => {
                    const content = ({ acitve }: { acitve: boolean }) => (
                        <button
                            type='button'
                            className={classNames(style.item, [], {
                                [style.active]: acitve
                            })}
                            onClick={item.onClick}
                        >
                            {item.name}
                        </button>
                    );

                    if (item.href) {
                        return (
                            <Menu.Item
                                as={AppLink}
                                to={item.href}
                                key={item.id}
                                disabled={item.disabled}
                            >
                                {content}
                            </Menu.Item>
                        );
                    }

                    return (
                        <Menu.Item as={Fragment} key={item.id} disabled={item.disabled}>
                            {content}
                        </Menu.Item>
                    );
                })}
            </Menu.Items>
        </Menu>
    );
});
