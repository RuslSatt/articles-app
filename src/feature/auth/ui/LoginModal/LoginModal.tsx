import { FC } from 'react';
import { Modal } from '@/shared/ui/Modal/Modal';
import { LoginForm } from '../LoginForm/LoginForm';

export interface LoginModalProps {
    visible?: boolean;
    onHide?: () => void;
}

export const LoginModal: FC<LoginModalProps> = (props) => {
    const { visible, onHide } = props;

    return (
        <Modal lazy visible={visible} onHide={onHide}>
            <LoginForm />
        </Modal>
    );
};
