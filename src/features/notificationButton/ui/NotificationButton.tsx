import { Popover } from '@/shared/ui/Popups';
import { icons } from '@/shared/assets/icons/types';
import { Button } from '@/shared/ui/Button/Button';
import style from './NotificationButton.module.scss';
import { NotificationList } from '@/entities/notification';

export const NotificationButton = () => {
    return (
        <Popover trigger={<Button className={style.button} icon={icons.BELL} text />}>
            <NotificationList />
        </Popover>
    );
};
