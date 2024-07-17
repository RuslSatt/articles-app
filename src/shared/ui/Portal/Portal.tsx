import { FC, ReactNode } from 'react';
import { createPortal } from 'react-dom';

export interface PortalProps {
    children: ReactNode;
    container?: HTMLElement;
}

export const Portal: FC<PortalProps> = (props) => {
    const { children, container } = props;

    return createPortal(children, container || document.body);
};
