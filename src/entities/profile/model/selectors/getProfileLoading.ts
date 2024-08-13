import { StateSchema } from '@/app/providers/store';

export const getProfileLoading = (state: StateSchema) => state.profile?.isLoading;
