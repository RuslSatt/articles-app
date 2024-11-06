import { RouteProps } from 'react-router-dom';
import { lazy } from 'react';
import { AppRoutes, RoutePath } from '@/shared/config/router/routerConfig';
import { NotPageFound } from '@/pages/NotPageFound';
import { ProfilePage } from '@/pages/ProfilePage';
import { ArticlesPage } from '@/pages/ArticlesPage';
import { ArticleDetailPage } from '@/pages/ArticleDetailPage';
import { ArticleEditPage } from '@/pages/ArticleEditPage';

const MainPage = lazy(() => import('@/pages/MainPage'));
const AboutPage = lazy(() => import('@/pages/AboutPage'));

export type IRouteProps = RouteProps & {
    authOnly?: boolean;
};

export const router: Array<IRouteProps> = [
    {
        path: RoutePath[AppRoutes.MAIN],
        element: <MainPage />
    },
    {
        path: RoutePath[AppRoutes.ABOUT],
        element: <AboutPage />
    },
    {
        path: `${RoutePath[AppRoutes.PROFILE]}:id`,
        element: <ProfilePage />,
        authOnly: true
    },
    {
        path: RoutePath[AppRoutes.ARTICLES],
        element: <ArticlesPage />,
        authOnly: true
    },
    {
        path: `${RoutePath[AppRoutes.ARTICLES_DETAILS]}:id`,
        element: <ArticleDetailPage />,
        authOnly: true
    },
    {
        path: `${RoutePath[AppRoutes.ARTICLE_CREATE]}`,
        element: <ArticleEditPage />,
        authOnly: true
    },
    {
        path: `${RoutePath[AppRoutes.ARTICLE_EDIT]}`,
        element: <ArticleEditPage />,
        authOnly: true
    },
    {
        path: RoutePath[AppRoutes.NOT_FOUND],
        element: <NotPageFound />
    }
];
