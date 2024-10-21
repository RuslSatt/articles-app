import { createSelector } from '@reduxjs/toolkit';
import { getUserData } from '@/entities/user';
import { AppRoutes, RoutePath } from '@/shared/config/router/routerConfig';
import HomeIcon from '@/shared/assets/icons/home.svg';
import AboutIcon from '@/shared/assets/icons/about.svg';

export const getSidebarItems = createSelector(getUserData, (userData) => {
    const items = [
        {
            path: RoutePath[AppRoutes.MAIN],
            text: 'Main',
            Icon: HomeIcon
        },
        {
            path: RoutePath[AppRoutes.ABOUT],
            text: 'About',
            Icon: AboutIcon
        }
    ];

    if (userData) {
        items.push(
            {
                path: `${RoutePath[AppRoutes.PROFILE]}${userData.id}`,
                text: 'Profile',
                Icon: HomeIcon
            },
            {
                path: RoutePath[AppRoutes.ARTICLES],
                text: 'Articles',
                Icon: HomeIcon
            }
        );
    }

    return items;
});
