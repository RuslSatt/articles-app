import { memo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import style from './Navbar.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ThemeSwitcher } from '@/features/ThemeSwitcher';
import { LangSwitcher } from '@/features/LangSwitcher';
import { Button } from '@/shared/ui/Button/Button';
import { Portal } from '@/shared/ui/Portal/Portal';
import { LoginModal } from '@/features/login';
import { getUserData } from '@/entities/user';
import { AppLink } from '@/shared/ui/AppLink/AppLink';
import { AppRoutes, RoutePath } from '@/shared/config/router/routerConfig';
import { HStack } from '@/shared/ui/Stack/HStack/HStack';
import { NotificationButton } from '@/features/notificationButton';
import { AvatarDropdown } from '@/features/avatarDropdown';

export interface NavbarProps {
    className?: string;
}

export const Navbar = memo((props: NavbarProps) => {
    const { className } = props;

    const { t } = useTranslation();

    const userData = useSelector(getUserData);

    const [visible, setVisible] = useState(false);

    const showModal = () => {
        setVisible(true);
    };

    return (
        <HStack
            tag='header'
            gap='10'
            justifyContent='between'
            className={classNames(style.navbar, [className])}
        >
            <HStack gap='20'>
                <AppLink className={style.logo} to={RoutePath[AppRoutes.MAIN]}>
                    {t('articles-app')}
                </AppLink>
                <AppLink className={style.article} to={RoutePath[AppRoutes.ARTICLE_CREATE]}>
                    {t('Создать статью')}
                </AppLink>
            </HStack>
            <HStack gap='10' className={style.navbar__tools}>
                <NotificationButton />
                <ThemeSwitcher />
                <LangSwitcher />

                {userData ? (
                    <AvatarDropdown userData={userData} />
                ) : (
                    <Button label={t('Войти')} onClick={showModal} />
                )}

                {!userData && (
                    <Portal>
                        <LoginModal visible={visible} onHide={() => setVisible(false)} />
                    </Portal>
                )}
            </HStack>
        </HStack>
    );
});
