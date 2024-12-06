import { useCallback, useState } from 'react';
import { Popover } from '@/shared/ui/Popups';
import { icons } from '@/shared/assets/icons/types';
import { Button } from '@/shared/ui/Button/Button';
import style from './NotificationButton.module.scss';
import { NotificationList } from '@/entities/notification';
import { useDevice } from '@/shared/lib/hooks/useDevice';
import { AnimationProvider } from '@/shared/lib/components/AnimationProvider/AnimationProvider';
import { Drawer } from '@/shared/ui/Drawer/Drawer';

export const NotificationButton = () => {
    const [isOpen, setIsOpen] = useState(false);

    const onCloseDrawer = useCallback(() => {
        setIsOpen(false);
    }, []);

    const isMobile = useDevice();

    const trigger = <Button className={style.button} icon={icons.BELL} text />;

    return (
        <div>
            {!isMobile ? (
                <Popover trigger={trigger}>
                    <NotificationList />
                </Popover>
            ) : (
                <AnimationProvider>
                    {trigger}
                    <Drawer isOpen={isOpen} onClose={onCloseDrawer}>
                        <NotificationList />
                    </Drawer>
                </AnimationProvider>
            )}
        </div>
    );
};
