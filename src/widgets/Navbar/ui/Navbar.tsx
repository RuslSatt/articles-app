import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import style from './Navbar.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ThemeSwitcher } from '@/feature/ThemeSwitcher';
import { LangSwitcher } from '@/feature/LangSwitcher';
import { Button } from '@/shared/ui/Button/Button';
import { Modal } from '@/shared/ui/Modal/Modal';
import { Portal } from '@/shared/ui/Portal/Portal';

export interface NavbarProps {
    className?: string;
}

export const Navbar: FC<NavbarProps> = (props) => {
    const { className } = props;

    const { t } = useTranslation();

    const [visible, setVisible] = useState(false);

    const showModal = () => {
        setVisible(true);
    };

    return (
        <header className={classNames(style.navbar, [className])}>
            <div className={style.navbar__tools}>
                <ThemeSwitcher />
                <LangSwitcher />
                <Button label={t('Войти')} onClick={showModal} />
                <Portal>
                    <Modal visible={visible} onHide={() => setVisible(false)} />
                </Portal>
            </div>
        </header>
    );
};
