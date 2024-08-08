import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import style from './Navbar.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ThemeSwitcher } from '@/feature/ThemeSwitcher';
import { LangSwitcher } from '@/feature/LangSwitcher';
import { Button } from '@/shared/ui/Button/Button';
import { Portal } from '@/shared/ui/Portal/Portal';
import { LoginModal } from '@/feature/login';
import { getUserData, userActions } from '@/entities/user';

export interface NavbarProps {
    className?: string;
}

export const Navbar: FC<NavbarProps> = (props) => {
    const { className } = props;

    const { t } = useTranslation();

    const dispatch = useDispatch();

    const userData = useSelector(getUserData);

    const [visible, setVisible] = useState(false);

    const showModal = () => {
        setVisible(true);
    };

    const logout = () => {
        dispatch(userActions.logout());
    };

    const authText = userData ? t('Выйти') : t('Войти');
    const onClickHandler = userData ? logout : showModal;

    return (
        <header className={classNames(style.navbar, [className])}>
            <div className={style.navbar__tools}>
                <ThemeSwitcher />
                <LangSwitcher />
                <Button label={authText} onClick={onClickHandler} />

                {!userData && (
                    <Portal>
                        <LoginModal visible={visible} onHide={() => setVisible(false)} />
                    </Portal>
                )}
            </div>
        </header>
    );
};
