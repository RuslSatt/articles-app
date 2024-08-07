import { StateSchema } from '@/app/providers/store';
import { initialState } from '../slice/loginSlice';

export const getLoginState = (state: StateSchema) => state.login ?? initialState;
