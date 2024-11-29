import { createSelector } from '@reduxjs/toolkit';
import { StateSchema } from '@/app/providers/store';
import { UserRole } from '../types/user';

export const getUserRoles = (state: StateSchema) => state.user.user?.roles || [];

export const isUserAdmin = createSelector(getUserRoles, (roles) =>
    Boolean(roles.includes(UserRole.ADMIN))
);
