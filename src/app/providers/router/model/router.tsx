import { RouteProps } from 'react-router-dom';
import { lazy } from 'react';
import { AppRoutes, routesPath } from '@/shared/config/router/routerConfig';
import { NotPageFound } from '@/pages/NotPageFound';
import { ProfilePage } from '@/pages/ProfilePage';

const MainPage = lazy(() => import('@/pages/MainPage'));
const AboutPage = lazy(() => import('@/pages/AboutPage'));

export type IRouteProps = RouteProps & {
    authOnly?: boolean;
};

export const router: Array<IRouteProps> = [
    {
        path: routesPath[AppRoutes.MAIN],
        element: <MainPage />
    },
    {
        path: routesPath[AppRoutes.ABOUT],
        element: <AboutPage />
    },
    {
        path: routesPath[AppRoutes.PROFILE],
        element: <ProfilePage />,
        authOnly: true
    },
    {
        path: routesPath[AppRoutes.NOT_FOUND],
        element: <NotPageFound />
    }
];
