import { StateSchema } from '@/app/providers/store';

export const getUserMounted = (state: StateSchema) => state.user._mounted;
