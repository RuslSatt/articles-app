import { memo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import style from './Navbar.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ThemeSwitcher } from '@/features/ThemeSwitcher';
import { LangSwitcher } from '@/features/LangSwitcher';
import { Button } from '@/shared/ui/Button/Button';
import { Portal } from '@/shared/ui/Portal/Portal';
import { LoginModal } from '@/features/login';
import { getUserData, isUserAdmin, userActions } from '@/entities/user';
import { AppLink } from '@/shared/ui/AppLink/AppLink';
import { AppRoutes, RoutePath } from '@/shared/config/router/routerConfig';
import { HStack } from '@/shared/ui/Stack/HStack/HStack';
import { Avatar, AvatarSize } from '@/shared/ui/Avatar/Avatar';
import { Dropdown, DropdownItem } from '@/shared/ui/Popups';
import { NotificationButton } from '@/features/notificationButton';

export interface NavbarProps {
    className?: string;
}

export const Navbar = memo((props: NavbarProps) => {
    const { className } = props;

    const { t } = useTranslation();

    const dispatch = useDispatch();

    const userData = useSelector(getUserData);
    const isAdmin = useSelector(isUserAdmin);

    const [visible, setVisible] = useState(false);

    const showModal = () => {
        setVisible(true);
    };

    const logout = () => {
        dispatch(userActions.logout());
    };

    const dropdownItems: DropdownItem[] = [
        {
            id: '1',
            name: t('Профиль'),
            href: `${RoutePath[AppRoutes.PROFILE]}${userData?.id}`
        },
        {
            id: '2',
            name: t('Выйти'),
            onClick: logout
        }
    ];

    if (isAdmin) {
        dropdownItems.unshift({
            id: 'admin',
            name: t('Админ-панель'),
            href: `${RoutePath[AppRoutes.ADMIN_PANEL]}`
        });
    }

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
                    <Dropdown
                        items={dropdownItems}
                        trigger={<Avatar image={userData.avatar} size={AvatarSize.SMALL} />}
                    />
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
