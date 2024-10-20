import { StateSchema } from '@/app/providers/store';

export const getCommentFormText = (state: StateSchema) => {
    return state.addCommentForm?.text;
};

export const getCommentFormError = (state: StateSchema) => {
    return state.addCommentForm?.error;
};

export const getCommentFormIsLoading = (state: StateSchema) => {
    return state.addCommentForm?.isLoading;
};
