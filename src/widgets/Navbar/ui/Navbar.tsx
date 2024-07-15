import { FC } from 'react';
import style from './Navbar.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ThemeSwitcher } from '@/feature/ThemeSwitcher';
import { LangSwitcher } from '@/feature/LangSwitcher';

export interface NavbarProps {
    className?: string;
}

export const Navbar: FC<NavbarProps> = (props) => {
    const { className } = props;

    return (
        <header className={classNames(style.navbar, [className])}>
            <div className={style.navbar__tools}>
                <ThemeSwitcher />
                <LangSwitcher />
            </div>
        </header>
    );
};
