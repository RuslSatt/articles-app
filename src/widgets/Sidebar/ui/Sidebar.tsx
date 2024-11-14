import { memo, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import style from './Sidebar.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button } from '@/shared/ui/Button/Button';
import { icons } from '@/shared/assets/icons/types';
import { SidebarItem } from './SidebarItem/SidebarItem';
import { getSidebarItems } from '../model/selectors/getSidebarItems';

export interface SidebarProps {
    className?: string;
}

export const Sidebar = memo((props: SidebarProps) => {
    const { className } = props;

    const [collapsed, setCollapsed] = useState(false);

    const onToggle = () => {
        setCollapsed((collapsed) => !collapsed);
    };

    const sidebarItems = useSelector(getSidebarItems);

    const items = useMemo(() => {
        return sidebarItems.map((item) => (
            <SidebarItem key={item.path} item={item} collapsed={collapsed} />
        ));
    }, [collapsed, sidebarItems]);

    return (
        <div
            data-testid='sidebar'
            className={classNames(style.sidebar, [className], {
                [style.collapsed]: collapsed
            })}
        >
            <div className={classNames(style.sidebarHeader)}>
                <Button data-testid='sidebar-toggle' text icon={icons.BURGER} onClick={onToggle} />
            </div>
            <nav className={style.sidebar__links}>{items}</nav>
        </div>
    );
});
