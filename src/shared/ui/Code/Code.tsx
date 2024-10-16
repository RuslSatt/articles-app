import { ButtonHTMLAttributes, memo, useCallback, useState } from 'react';
import style from './Code.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button } from '../Button/Button';
import { icons } from '@/shared/assets/icons/types';

export interface CodeProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    text?: string;
    className?: string;
}

export const Code = memo((props: CodeProps) => {
    const { className, text } = props;

    const [copied, setCopied] = useState(false);

    const onCopy = useCallback(() => {
        navigator.clipboard.writeText(text || '');
        setCopied(true);
    }, [text]);

    return (
        <pre className={classNames(style.codeBlock, [className])}>
            <code className={style.code}>{text}</code>
            <Button
                onClick={onCopy}
                className={style.button}
                text
                icon={copied ? icons.CHECK : icons.COPY}
            />
        </pre>
    );
});
