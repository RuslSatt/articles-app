import { FC, Suspense } from 'react';
import { Modal } from '@/shared/ui/Modal/Modal';
import { LoginFormLazy } from '../LoginForm/LoginForm.lazy';

export interface LoginModalProps {
    visible?: boolean;
    onHide?: () => void;
}

export const LoginModal: FC<LoginModalProps> = (props) => {
    const { visible, onHide } = props;

    return (
        <Modal lazy visible={visible} onHide={onHide}>
            <Suspense fallback={null}>
                <LoginFormLazy />
            </Suspense>
        </Modal>
    );
};
