import { FC, useEffect } from 'react';
import style from './ProfilePage.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
    DynamicReducerLoader,
    ReducersList
} from '@/shared/lib/DynamicReducerLoader/DynamicReducerLoader';
import { fetchProfileData, ProfileCard, profileReducer } from '@/entities/profile';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';

export interface ProfilePageProps {
    className?: string;
}

const reducersList: ReducersList = {
    profile: profileReducer
};

const ProfilePage: FC<ProfilePageProps> = (props) => {
    const { className } = props;

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchProfileData());
    }, [dispatch]);

    return (
        <DynamicReducerLoader reducers={reducersList}>
            <div className={classNames(style.profilePage, [className])}>
                <ProfileCard />
            </div>
        </DynamicReducerLoader>
    );
};

export default ProfilePage;
