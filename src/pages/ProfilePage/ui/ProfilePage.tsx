import { FC, useEffect } from 'react';
import { useSelector } from 'react-redux';
import style from './ProfilePage.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
    DynamicReducerLoader,
    ReducersList
} from '@/shared/lib/DynamicReducerLoader/DynamicReducerLoader';
import {
    fetchProfileData,
    getProfileError,
    getProfileLoading,
    ProfileCard,
    profileReducer
} from '@/entities/profile';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { ProfileEditButton, ProfileForm } from '@/features/profile';
import { Loader } from '@/shared/ui/Loader/Loader';
import { Message, Severity } from '@/shared/ui/Message/Message';

export interface ProfilePageProps {
    className?: string;
}

const reducersList: ReducersList = {
    profile: profileReducer
};

const ProfilePage: FC<ProfilePageProps> = (props) => {
    const { className } = props;

    const dispatch = useAppDispatch();

    const isLoading = useSelector(getProfileLoading);
    const error = useSelector(getProfileError);

    useEffect(() => {
        dispatch(fetchProfileData());
    }, [dispatch]);

    return (
        <DynamicReducerLoader reducers={reducersList}>
            <div className={classNames(style.profilePage, [className])}>
                {error && <Message severity={Severity.ERROR} text={error} />}

                {isLoading && (
                    <div className={style.profileLoader}>
                        <Loader />
                    </div>
                )}

                {!isLoading && !error && (
                    <ProfileCard form={<ProfileForm />} editButton={<ProfileEditButton />} />
                )}
            </div>
        </DynamicReducerLoader>
    );
};

export default ProfilePage;
