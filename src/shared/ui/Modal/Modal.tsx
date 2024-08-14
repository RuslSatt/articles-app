import React, { FC, ReactNode, useCallback, useEffect } from 'react';
import style from './Modal.module.scss';
import { classNames, ClassNamesMods } from '@/shared/lib/classNames/classNames';

export interface ModalProps {
    className?: string;
    visible?: boolean;
    onHide?: () => void;
    lazy?: boolean;
    children?: ReactNode;
}

export const Modal: FC<ModalProps> = (props) => {
    const { className, children, visible, onHide, lazy } = props;

    const mods: ClassNamesMods = {
        [style.visible]: visible
    };

    const [isMounted, setIsMounted] = React.useState(false);

    const onClose = useCallback(() => {
        if (visible) {
            onHide?.();
        }
    }, [visible, onHide]);

    const clickOnContent = (e: React.MouseEvent) => {
        e.stopPropagation();
    };

    const onKeyDown = useCallback(
        (e: Event) => {
            const event = e as KeyboardEvent;
            if (event.key === 'Escape') {
                onClose();
            }
        },
        [onClose]
    );

    useEffect(() => {
        if (visible) {
            setIsMounted(true);
        }
    }, [visible]);

    useEffect(() => {
        if (visible) {
            window.addEventListener('keydown', onKeyDown);
        }
        return () => {
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [visible, onKeyDown]);

    if (lazy && !isMounted) return null;

    return (
        <div className={classNames(style.modal, [className], mods)}>
            <div onClick={onClose} className={style.modal__overlay} aria-hidden='true'>
                <div onClick={clickOnContent} className={style.modal__content} aria-hidden='true'>
                    {children}
                </div>
            </div>
        </div>
    );
};
