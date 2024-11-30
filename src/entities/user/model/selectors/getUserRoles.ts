import { createSelector } from '@reduxjs/toolkit';
import { StateSchema } from '@/app/providers/store';
import { UserRole } from '../consts/consts';

export const getUserRoles = (state: StateSchema) => state.user.user?.roles || [];

export const isUserAdmin = createSelector(getUserRoles, (roles) =>
    Boolean(roles.includes(UserRole.ADMIN))
);
