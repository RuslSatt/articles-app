import { ISidebarItem } from '../types/sidebar';
import HomeIcon from '@/shared/assets/icons/home.svg';
import AboutIcon from '@/shared/assets/icons/about.svg';
import { AppRoutes } from '@/shared/config/router/routerConfig';

export const sidebarItems: ISidebarItem[] = [
    {
        path: AppRoutes.MAIN,
        text: 'Main',
        Icon: HomeIcon
    },
    {
        path: AppRoutes.ABOUT,
        text: 'About',
        Icon: AboutIcon
    },
    {
        path: AppRoutes.PROFILE,
        text: 'Profile',
        Icon: HomeIcon
    }
];
