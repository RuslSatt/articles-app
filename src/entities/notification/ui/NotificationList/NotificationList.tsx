import { memo } from 'react';
import { useFetchNotificationsQuery } from '../../api/notificationApi';
import { NotificationItem } from '../NotificationItem/NotificationItem';
import { VStack } from '@/shared/ui/Stack/VStack/VStack';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';
import style from './NotificationList.module.scss';

export interface NotificationListProps {
    className?: string;
}

export const NotificationList = memo((props: NotificationListProps) => {
    const { className } = props;

    const { data, isLoading } = useFetchNotificationsQuery(null, {
        pollingInterval: 5000
    });

    let content = null;

    if (isLoading) {
        content = (
            <VStack gap='10'>
                <Skeleton width={150} height={15} />
                <Skeleton width={150} height={15} />
                <Skeleton width={150} height={15} />
            </VStack>
        );
    } else if (data) {
        content = data?.map((item) => <NotificationItem key={item.id} data={item} />);
    }

    return (
        <VStack gap='10' className={style.notificationList}>
            {content}
        </VStack>
    );
});
