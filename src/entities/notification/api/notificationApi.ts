import { rtkApi } from '@/shared/api/rtk';
import { INotification } from '../model/types';

const notificationApi = rtkApi.injectEndpoints({
    endpoints: (builder) => ({
        fetchNotifications: builder.query<INotification[], null>({
            query: () => ({
                url: '/notifications'
            })
        })
    })
});

export const { useFetchNotificationsQuery } = notificationApi;
