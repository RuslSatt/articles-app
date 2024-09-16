import { ISidebarItem } from '../types/sidebar';
import HomeIcon from '@/shared/assets/icons/home.svg';
import AboutIcon from '@/shared/assets/icons/about.svg';
import { AppRoutes, RoutePath } from '@/shared/config/router/routerConfig';

export const sidebarItems: ISidebarItem[] = [
    {
        path: RoutePath[AppRoutes.MAIN],
        text: 'Main',
        Icon: HomeIcon
    },
    {
        path: RoutePath[AppRoutes.ABOUT],
        text: 'About',
        Icon: AboutIcon
    },
    {
        path: RoutePath[AppRoutes.PROFILE],
        text: 'Profile',
        Icon: HomeIcon
    },
    {
        path: RoutePath[AppRoutes.ARTICLES],
        text: 'Articles',
        Icon: HomeIcon
    }
];
