import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { AppRoutes } from '@/shared/config/router/routerConfig';
import style from './Navbar.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppLink } from '@/shared/ui/AppLink/AppLink';
import { ThemeSwitcher } from '@/feature/ThemeSwitcher';
import { LangSwitcher } from '@/feature/LangSwitcher';

export interface NavbarProps {
    className?: string
}

export const Navbar: FC<NavbarProps> = (props) => {
    const { className } = props;

    const { t } = useTranslation();

    return (
        <header className={classNames(style.navbar, [className])}>

            <div className={style.navbar__tools}>
                <ThemeSwitcher />
                <LangSwitcher />
            </div>

            <nav className={style.navbar__links}>
                <AppLink to={AppRoutes.MAIN}>{t('Main')}</AppLink>
                <AppLink to={AppRoutes.ABOUT}>{t('About')}</AppLink>
            </nav>
        </header>
    );
};
