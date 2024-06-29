import React, {FC} from 'react';
import {Link} from "react-router-dom";
import {AppRoutes} from "@/shared/config/router/routerConfig";
import style from './Navbar.module.scss'
import {classNames} from "@/shared/lib/classNames/classNames";

export interface NavbarProps {
    className?: string
}

export const Navbar: FC<NavbarProps> = (props) => {
    const { className } = props

    return (
        <header className={classNames(style.navbar, [className])}>
            <nav className={style.navbar__links}>
                <Link to={AppRoutes.MAIN}>Main</Link>
                <Link to={AppRoutes.ABOUT}>About</Link>
            </nav>
        </header>
    );
};
