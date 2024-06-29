import style from './AppLink.module.scss'
import { classNames } from "@/shared/lib/classNames/classNames";
import { FC } from "react";
import {Link, LinkProps} from "react-router-dom";

export interface AppLinkProps extends LinkProps {
    className?: string
}

export const AppLink: FC<AppLinkProps> = (props) => {
    const { className, children, to, ...other } = props

    return (
        <Link
            to={to} {...other}
            className={classNames(style.appLink, [className])}
        >
            {children}
        </Link>
    );
};
