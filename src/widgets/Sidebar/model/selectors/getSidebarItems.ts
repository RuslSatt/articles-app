import { createSelector } from '@reduxjs/toolkit';
import { getUserData } from '@/entities/user';
import HomeIcon from '@/shared/assets/icons/home.svg';
import AboutIcon from '@/shared/assets/icons/about.svg';
import {
    getRouteAbout,
    getRouteArticles,
    getRouteMain,
    getRouteProfile
} from '@/shared/types/router';

export const getSidebarItems = createSelector(getUserData, (userData) => {
    const items = [
        {
            path: getRouteMain(),
            text: 'Main',
            Icon: HomeIcon
        },
        {
            path: getRouteAbout(),
            text: 'About',
            Icon: AboutIcon
        }
    ];

    if (userData) {
        items.push(
            {
                path: getRouteProfile(userData.id),
                text: 'Profile',
                Icon: HomeIcon
            },
            {
                path: getRouteArticles(),
                text: 'Articles',
                Icon: HomeIcon
            }
        );
    }

    return items;
});
