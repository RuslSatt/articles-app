import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import style from './LoginForm.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button } from '@/shared/ui/Button/Button';
import { Input } from '@/shared/ui/Input/Input';
import { getLoginState } from '../../model/selectors/getLoginState';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import { loginByUsername } from '../../model/services/loginByUsername';
import { Message, Severity } from '@/shared/ui/Message/Message';
import {
    DynamicReducerLoader,
    ReducersList
} from '@/shared/lib/DynamicReducerLoader/DynamicReducerLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';

export interface LoginFormProps {
    className?: string;
    onSuccess?: () => void;
}

const reducersList: ReducersList = {
    login: loginReducer
};

const LoginForm: FC<LoginFormProps> = (props) => {
    const { className, onSuccess } = props;

    const { username, password, isLoading, error } = useSelector(getLoginState);
    const dispatch = useAppDispatch();

    const { t } = useTranslation();

    const handlerChangeUsername = (value: string) => {
        dispatch(loginActions.setUsername(value));
    };

    const handlerChangePassword = (value: string) => {
        dispatch(loginActions.setPassword(value));
    };

    const handlerLogin = async () => {
        const result = await dispatch(loginByUsername());
        if (result.meta.requestStatus === 'fulfilled') {
            onSuccess?.();
        }
    };

    return (
        <DynamicReducerLoader reducersList={reducersList}>
            <div className={classNames(style.loginForm, [className])}>
                {error && <Message severity={Severity.ERROR} text={error} />}
                <Input autofocus type='text' value={username} onChange={handlerChangeUsername} />
                <Input type='password' value={password} onChange={handlerChangePassword} />
                <Button disabled={isLoading} label={t('Войти')} onClick={handlerLogin} />
            </div>
        </DynamicReducerLoader>
    );
};

export default LoginForm;
