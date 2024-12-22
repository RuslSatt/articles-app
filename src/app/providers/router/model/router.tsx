import { RouteProps } from 'react-router-dom';
import { lazy } from 'react';
import {
    getRouteAbout,
    getRouteAdminPanel,
    getRouteArticleCreate,
    getRouteArticleDetails,
    getRouteArticleEdit,
    getRouteArticles,
    getRouteForbidden,
    getRouteMain,
    getRouteNotFound,
    getRouteProfile
} from '@/shared/types/router';
import { NotPageFound } from '@/pages/NotPageFound';
import { ProfilePage } from '@/pages/ProfilePage';
import { ArticlesPage } from '@/pages/ArticlesPage';
import { ArticleDetailPage } from '@/pages/ArticleDetailPage';
import { ArticleEditPage } from '@/pages/ArticleEditPage';
import { AdminPanelPage } from '@/pages/AdminPanelPage';
import { UserRole } from '@/entities/user';
import { ForbiddenPage } from '@/pages/ForbiddenPage';

const MainPage = lazy(() => import('@/pages/MainPage'));
const AboutPage = lazy(() => import('@/pages/AboutPage'));

export type IRouteProps = RouteProps & {
    authOnly?: boolean;
    roles?: UserRole[];
};

export const router: Array<IRouteProps> = [
    {
        path: getRouteMain(),
        element: <MainPage />
    },
    {
        path: getRouteAbout(),
        element: <AboutPage />
    },
    {
        path: getRouteProfile(':id'),
        element: <ProfilePage />,
        authOnly: true
    },
    {
        path: getRouteArticles(),
        element: <ArticlesPage />,
        authOnly: true
    },
    {
        path: getRouteArticleDetails(':id'),
        element: <ArticleDetailPage />,
        authOnly: true
    },
    {
        path: getRouteArticleCreate(),
        element: <ArticleEditPage />,
        authOnly: true
    },
    {
        path: getRouteArticleEdit(':id'),
        element: <ArticleEditPage />,
        authOnly: true
    },
    {
        path: getRouteAdminPanel(),
        element: <AdminPanelPage />,
        authOnly: true,
        roles: [UserRole.ADMIN]
    },
    {
        path: getRouteForbidden(),
        element: <ForbiddenPage />,
        authOnly: true
    },
    {
        path: getRouteNotFound(),
        element: <NotPageFound />
    }
];
