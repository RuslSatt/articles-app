import { useTranslation } from 'react-i18next';
import { Popover } from '@/shared/ui/Popups';
import { icons } from '@/shared/assets/icons/types';
import { Button } from '@/shared/ui/Button/Button';
import style from './NotificationButton.module.scss';

export const NotificationButton = () => {
    const { t } = useTranslation();

    return (
        <Popover trigger={<Button className={style.button} icon={icons.BELL} text />}>
            <div>{t('Уведомления')}</div>
        </Popover>
    );
};
