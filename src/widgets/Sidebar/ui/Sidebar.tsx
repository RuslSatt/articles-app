import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import style from './Sidebar.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button } from '@/shared/ui/Button/Button';
import { icons } from '@/shared/assets/icons/types';
import { AppLink } from '@/shared/ui/AppLink/AppLink';
import { AppRoutes } from '@/shared/config/router/routerConfig';

export interface SidebarProps {
    className?: string;
}

export const Sidebar: FC<SidebarProps> = (props) => {
    const { className } = props;

    const [collapsed, setCollapsed] = useState(false);

    const { t } = useTranslation();

    const onToggle = () => {
        setCollapsed((collapsed) => !collapsed);
    };

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
            <nav className={style.sidebar__links}>
                <AppLink to={AppRoutes.MAIN}>{t('Main')}</AppLink>
                <AppLink to={AppRoutes.ABOUT}>{t('About')}</AppLink>
            </nav>
        </div>
    );
};
