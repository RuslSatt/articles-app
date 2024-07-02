import React, {FC} from 'react';
import {AppRoutes} from "@/shared/config/router/routerConfig";
import style from './Navbar.module.scss'
import {classNames} from "@/shared/lib/classNames/classNames";
import {AppLink} from "@/shared/ui/AppLink/AppLink";
import {ThemeSwitcher} from "@/shared/ui/ThemeSwitcher/ThemeSwitcher";

export interface NavbarProps {
    className?: string
}

export const Navbar: FC<NavbarProps> = (props) => {
    const { className } = props

    return (
        <header className={classNames(style.navbar, [className])}>
            <ThemeSwitcher />

            <nav className={style.navbar__links}>
                <AppLink to={AppRoutes.MAIN}>Main</AppLink>
                <AppLink to={AppRoutes.ABOUT}>About</AppLink>
            </nav>
        </header>
    );
};
