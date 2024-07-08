import { RouteProps } from 'react-router-dom';
import { lazy } from 'react';
import { AppRoutes, routesPath } from '@/shared/config/router/routerConfig';

const MainPage = lazy((() => import('@/pages/MainPage')));
const AboutPage = lazy((() => import('@/pages/AboutPage')));

export const router: Array<RouteProps> = [
    {
        path: routesPath[AppRoutes.MAIN],
        element: <MainPage />,
    },
    {
        path: routesPath[AppRoutes.ABOUT],
        element: <AboutPage />,
    },
];
