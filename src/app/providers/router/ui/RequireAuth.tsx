import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import React, { useMemo } from 'react';
import { getUserData, getUserRoles, UserRole } from '@/entities/user';
import { AppRoutes, RoutePath } from '@/shared/config/router/routerConfig';

export interface IRequireAuthProps {
    children: React.ReactElement;
    roles?: UserRole[];
}

export function RequireAuth({ children, roles }: IRequireAuthProps) {
    const auth = useSelector(getUserData);
    const location = useLocation();

    const userRoles = useSelector(getUserRoles);

    const hasRequiredRoles = useMemo(() => {
        if (!roles) {
            return true;
        }

        return roles.some((requiredRole) => userRoles.includes(requiredRole));
    }, [roles, userRoles]);

    if (!hasRequiredRoles) {
        return <Navigate to={RoutePath[AppRoutes.FORBIDDEN]} state={{ from: location }} replace />;
    }

    if (!auth) {
        return <Navigate to={RoutePath[AppRoutes.MAIN]} state={{ from: location }} replace />;
    }

    return children;
}
