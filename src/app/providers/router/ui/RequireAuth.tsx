import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import React from 'react';
import { getUserData } from '@/entities/user';
import { AppRoutes, RoutePath } from '@/shared/config/router/routerConfig';

export function RequireAuth({ children }: { children: React.ReactElement }) {
    const auth = useSelector(getUserData);
    const location = useLocation();

    if (!auth) {
        return <Navigate to={RoutePath[AppRoutes.MAIN]} state={{ from: location }} replace />;
    }

    return children;
}
