import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import style from './SidebarItem.module.scss';
import { AppLink } from '@/shared/ui/AppLink/AppLink';
import { ISidebarItem } from '../../types/sidebar';
import { classNames } from '@/shared/lib/classNames/classNames';

export interface SidebarItemProps {
    item?: ISidebarItem;
    collapsed?: boolean;
}

export const SidebarItem = memo((props: SidebarItemProps) => {
    const { item, collapsed } = props;

    const { t } = useTranslation();

    return (
        <AppLink
            className={classNames(style.sidebar__link, [], { [style.collapsed]: collapsed })}
            to={item.path}
        >
            <item.Icon />
            <span className={style.sidebar__link_text}>{t(item.text)}</span>
        </AppLink>
    );
});
