import { FC, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector, useStore } from 'react-redux';
import style from './LoginForm.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button } from '@/shared/ui/Button/Button';
import { Input } from '@/shared/ui/Input/Input';
import { getLoginState } from '../../model/selectors/getLoginState';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import { loginByUsername } from '../../model/services/loginByUsername';
import { Message, Severity } from '@/shared/ui/Message/Message';
import { ReduxStoreWithManager } from '@/app/providers/store';

export interface LoginFormProps {
    className?: string;
}

const LoginForm: FC<LoginFormProps> = (props) => {
    const { className } = props;

    const { username, password, isLoading, error } = useSelector(getLoginState);
    const dispatch = useDispatch();
    const store = useStore() as ReduxStoreWithManager;

    const { t } = useTranslation();

    const handlerChangeUsername = (value: string) => {
        dispatch(loginActions.setUsername(value));
    };

    const handlerChangePassword = (value: string) => {
        dispatch(loginActions.setPassword(value));
    };

    const handlerLogin = () => {
        dispatch(loginByUsername());
    };

    useEffect(() => {
        store.reducerManager.add('login', loginReducer);
        dispatch({ type: '@ADD login reducer' });

        return () => {
            store.reducerManager.remove('login');
            dispatch({ type: '@DESTROY login reducer' });
        };
    }, []);

    return (
        <div className={classNames(style.loginForm, [className])}>
            {error && <Message severity={Severity.ERROR} text={error} />}
            <Input autofocus type='text' value={username} onChange={handlerChangeUsername} />
            <Input type='password' value={password} onChange={handlerChangePassword} />
            <Button disabled={isLoading} label={t('Войти')} onClick={handlerLogin} />
        </div>
    );
};

export default LoginForm;
