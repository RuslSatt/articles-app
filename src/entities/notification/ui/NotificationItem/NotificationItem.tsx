import { memo } from 'react';
import style from './NotificationItem.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { INotification } from '../../model/types';
import { VStack } from '@/shared/ui/Stack/VStack/VStack';
import { Card } from '@/shared/ui/Card/Card';

export interface NotificationItemProps {
    className?: string;
    data: INotification;
}

export const NotificationItem = memo((props: NotificationItemProps) => {
    const { className, data } = props;

    const content = (
        <Card>
            <VStack
                gap='5'
                alignItems='start'
                className={classNames(style.notificationItem, [className])}
            >
                <p className={style.title}>{data.title}</p>
                <p className={style.description}>{data.description}</p>
            </VStack>
        </Card>
    );

    if (data.href) {
        return (
            <a href={data.href} target='_blank' rel='noreferrer'>
                {content}
            </a>
        );
    }

    return content;
});
