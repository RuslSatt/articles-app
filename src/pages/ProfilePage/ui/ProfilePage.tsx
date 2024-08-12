import { FC } from 'react';
import style from './ProfilePage.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
    DynamicReducerLoader,
    ReducersList
} from '@/shared/lib/DynamicReducerLoader/DynamicReducerLoader';
import { Profile, profileReducer } from '@/entities/profile';

export interface ProfilePageProps {
    className?: string;
}

const reducersList: ReducersList = {
    profile: profileReducer
};

const ProfilePage: FC<ProfilePageProps> = (props) => {
    const { className } = props;

    return (
        <DynamicReducerLoader reducers={reducersList}>
            <div className={classNames(style.profilePage, [className])}>
                <Profile />
            </div>
        </DynamicReducerLoader>
    );
};

export default ProfilePage;
