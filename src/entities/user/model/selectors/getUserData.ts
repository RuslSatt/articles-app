import { StateSchema } from '@/app/providers/store';

export const getUserData = (state: StateSchema) => state.user.user;
