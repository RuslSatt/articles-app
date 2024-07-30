import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import style from './LoginForm.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button } from '@/shared/ui/Button/Button';
import { Input } from '@/shared/ui/Input/Input';
import { getLoginState } from '../../model/selectors/getLoginState';
import { loginActions } from '../../model/slice/loginSlice';

export interface LoginFormProps {
    className?: string;
}

export const LoginForm: FC<LoginFormProps> = (props) => {
    const { className } = props;

    const { username, password, isLoading, error } = useSelector(getLoginState);
    const dispatch = useDispatch();

    const { t } = useTranslation();

    const handlerChangeUsername = (value: string) => {
        dispatch(loginActions.setUsername(value));
    };

    const handlerChangePassword = (value: string) => {
        dispatch(loginActions.setPassword(value));
    };

    return (
        <div className={classNames(style.loginForm, [className])}>
            <Input autofocus type='text' value={username} onChange={handlerChangeUsername} />
            <Input type='password' value={password} onChange={handlerChangePassword} />
            <Button disabled={isLoading} label={t('Войти')} />
        </div>
    );
};
