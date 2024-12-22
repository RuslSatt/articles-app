import { StateSchema } from '@/app/providers/store';
import { buildSelector } from '@/shared/lib/store/buildSelector';

export const [useCommentFormText, getCommentFormTextSelector] = buildSelector(
    (state: StateSchema) => {
        return state.addCommentForm?.text ?? '';
    }
);

export const [useCommentFormError, getCommentFormErrorSelector] = buildSelector(
    (state: StateSchema) => {
        return state.addCommentForm?.error;
    }
);

export const [useCommentFormIsLoading, getCommentFormIsLoadingSelector] = buildSelector(
    (state: StateSchema) => {
        return state.addCommentForm?.error;
    }
);
