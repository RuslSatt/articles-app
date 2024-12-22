import { PayloadAction } from '@reduxjs/toolkit';
import { IAddCommentFormSchema } from '../types/addCommentForm';
import { buildSlice } from '@/shared/lib/store/buildSlice';

const initialState: IAddCommentFormSchema = {
    text: '',
    error: undefined,
    isLoading: false
};

export const addCommentFormSlice = buildSlice({
    name: 'addCommentForm',
    initialState,
    reducers: {
        setText: (state, action: PayloadAction<string>) => {
            state.text = action.payload;
        }
    }
});

export const { actions: addCommentFormActions } = addCommentFormSlice;
export const { reducer: addCommentFormReducer } = addCommentFormSlice;
export const { useActions: useAddCommentFormActions } = addCommentFormSlice;
