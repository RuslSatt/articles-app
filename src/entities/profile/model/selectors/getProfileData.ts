import { StateSchema } from '@/app/providers/store';

export const getProfileData = (state: StateSchema) => state.profile?.data;

export const getProfileError = (state: StateSchema) => state.profile?.error;

export const getProfileForm = (state: StateSchema) => state.profile?.form;

export const getProfileLoading = (state: StateSchema) => state.profile?.isLoading;

export const getProfileReadonly = (state: StateSchema) => state.profile?.readonly;

export const getProfileValidateErrors = (state: StateSchema) => state.profile?.validateErrors;
