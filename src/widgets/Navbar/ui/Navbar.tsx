import React, {FC} from 'react';
import {AppRoutes} from "@/shared/config/router/routerConfig";
import style from './Navbar.module.scss'
import {classNames} from "@/shared/lib/classNames/classNames";
import {AppLink} from "@/shared/ui/AppLink/AppLink";
import {ThemeSwitcher} from "@/shared/ui/ThemeSwitcher/ThemeSwitcher";
import {LangSwitcher} from "@/shared/ui/LangSwitcher/LangSwitcher";

export interface NavbarProps {
    className?: string
}

export const Navbar: FC<NavbarProps> = (props) => {
    const { className } = props

    return (
        <header className={classNames(style.navbar, [className])}>

            <div className={style.navbar__tools}>
                <ThemeSwitcher />
                <LangSwitcher />
            </div>

            <nav className={style.navbar__links}>
                <AppLink to={AppRoutes.MAIN}>Main</AppLink>
                <AppLink to={AppRoutes.ABOUT}>About</AppLink>
            </nav>
        </header>
    );
};
