import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import style from './LoginForm.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button } from '@/shared/ui/Button/Button';
import { Input } from '@/shared/ui/Input/Input';

export interface LoginFormProps {
    className?: string;
}

export const LoginForm: FC<LoginFormProps> = (props) => {
    const { className } = props;

    const { t } = useTranslation();

    return (
        <div className={classNames(style.loginForm, [className])}>
            <Input autofocus type='text' />
            <Input type='password' />
            <Button label={t('Войти')} />
        </div>
    );
};
