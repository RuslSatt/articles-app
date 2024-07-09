import { FC, useState } from 'react';
import style from './Sidebar.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button } from '@/shared/ui/Button/Button';
import { icons } from '@/shared/assets/icons/types';

export interface SidebarProps {
    className?: string
}

export const Sidebar: FC<SidebarProps> = (props) => {
    const { className } = props;

    const [collapsed, setCollapsed] = useState(false);

    const onToggle = () => {
        setCollapsed((collapsed) => !collapsed);
    };

    return (
        <div className={classNames(
            style.sidebar,
            [className],
            {
                [style.collapsed]: collapsed,
            },
        )}
        >
            <div className={classNames(style.sidebarHeader)}>
                <Button text icon={icons.BURGER} onClick={onToggle} />
            </div>
        </div>
    );
};
