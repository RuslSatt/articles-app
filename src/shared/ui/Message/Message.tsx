import { FC } from 'react';
import style from './Message.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';

export enum Severity {
    SUCCESS = 'success',
    INFO = 'info',
    WARNING = 'warning',
    ERROR = 'error'
}

export interface MessageProps {
    className?: string;
    text?: string;
    severity?: Severity;
}

export const Message: FC<MessageProps> = (props) => {
    const { className, text, severity, ...other } = props;

    return (
        <div
            data-testid='message'
            {...other}
            className={classNames(style.message, [className, severity && style[severity]])}
        >
            <span className={style.message__text}>{text}</span>
        </div>
    );
};
