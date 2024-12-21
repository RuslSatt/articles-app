import { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Avatar, AvatarSize } from '@/shared/ui/Avatar/Avatar';
import { Dropdown, DropdownItem } from '@/shared/ui/Popups';
import { AppRoutes, RoutePath } from '@/shared/types/router';
import { isUserAdmin, User, userActions } from '@/entities/user';

export interface AvatarDropdownProps {
    className?: string;
    userData?: User;
}

export const AvatarDropdown = memo((props: AvatarDropdownProps) => {
    const { className, userData } = props;

    const dispatch = useDispatch();

    const { t } = useTranslation();

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

    const isAdmin = useSelector(isUserAdmin);

    if (isAdmin) {
        dropdownItems.unshift({
            id: 'admin',
            name: t('Админ-панель'),
            href: `${RoutePath[AppRoutes.ADMIN_PANEL]}`
        });
    }

    if (!userData) {
        return null;
    }

    return (
        <Dropdown
            items={dropdownItems}
            trigger={<Avatar image={userData.avatar} size={AvatarSize.SMALL} />}
        />
    );
});
