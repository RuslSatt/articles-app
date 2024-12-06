import React, { FC, ReactNode, useCallback, useEffect } from 'react';
import style from './Modal.module.scss';
import { classNames, ClassNamesMods } from '@/shared/lib/classNames/classNames';
import { Overlay } from '../Overlay/Overlay';
import { useModal } from '@/shared/lib/hooks/useModal';

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

    const { close, isClosing, isMounted } = useModal({
        animationDelay: 0,
        onClose: onHide,
        isOpen: visible
    });

    if (lazy && !isMounted) return null;

    return (
        <div className={classNames(style.modal, [className], mods)}>
            <Overlay onClick={close} />
            <div className={style.modal__content} aria-hidden='true'>
                {children}
            </div>
        </div>
    );
};
