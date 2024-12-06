import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import style from './AddCommentForm.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button } from '@/shared/ui/Button/Button';
import { getCommentFormError, getCommentFormText } from '../model/selectors/getCommentFormData';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { addCommentFormActions, addCommentFormReducer } from '../model/slice/addCommentFormSlice';
import { Input } from '@/shared/ui/Input/Input';
import {
    DynamicReducerLoader,
    ReducersList
} from '@/shared/lib/components/DynamicReducerLoader/DynamicReducerLoader';

export interface AddCommentFormProps {
    className?: string;
    onSendComment: (text: string) => void;
}

const reducersList: ReducersList = {
    addCommentForm: addCommentFormReducer
};

const AddCommentForm = memo((props: AddCommentFormProps) => {
    const { className, onSendComment } = props;

    const { t } = useTranslation();

    const text = useSelector(getCommentFormText);
    const error = useSelector(getCommentFormError);
    const dispatch = useAppDispatch();

    const onChangeText = useCallback(
        (value: string) => {
            dispatch(addCommentFormActions.setText(value));
        },
        [dispatch]
    );

    const onSendCommentHandler = useCallback(() => {
        onSendComment(text ?? '');
        onChangeText('');
    }, [onChangeText, onSendComment, text]);

    return (
        <DynamicReducerLoader reducersList={reducersList}>
            <div className={classNames(style.addCommentForm, [className])}>
                <Input
                    value={text}
                    onChange={onChangeText}
                    type='text'
                    placeholder={t('Введите комментарий')}
                />
                <Button onClick={onSendCommentHandler} label={t('Отправить')} />
            </div>
        </DynamicReducerLoader>
    );
});

export default AddCommentForm;
