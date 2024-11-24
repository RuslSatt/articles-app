import { FC } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import style from './ProfilePage.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
    DynamicReducerLoader,
    ReducersList
} from '@/shared/lib/DynamicReducerLoader/DynamicReducerLoader';
import {
    fetchProfileData,
    getProfileError,
    getProfileForm,
    getProfileLoading,
    ProfileCard,
    profileReducer
} from '@/entities/profile';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { ProfileEditButton, ProfileForm } from '@/features/profile';
import { Loader } from '@/shared/ui/Loader/Loader';
import { Message, Severity } from '@/shared/ui/Message/Message';
import { useInitialEffect } from '@/shared/lib/hooks/useInitailEffect';
import { getUserData } from '@/entities/user';
import { Page } from '@/widgets/Page/Page';
import { VStack } from '@/shared/ui/Stack/VStack/VStack';

export interface ProfilePageProps {
    className?: string;
}

const reducersList: ReducersList = {
    profile: profileReducer
};

const ProfilePage: FC<ProfilePageProps> = (props) => {
    const { className } = props;

    const dispatch = useAppDispatch();

    const paramId = useParams<{ id: string }>()?.id;

    const isLoading = useSelector(getProfileLoading);
    const error = useSelector(getProfileError);
    const formData = useSelector(getProfileForm);
    const authData = useSelector(getUserData);
    const canEdit = formData?.id === authData?.id;

    useInitialEffect(() => {
        const id = paramId ?? formData?.id;

        if (id) dispatch(fetchProfileData(id));
    });

    return (
        <DynamicReducerLoader reducersList={reducersList}>
            <Page className={classNames(style.profilePage, [className])}>
                {error && <Message severity={Severity.ERROR} text={error} />}

                {isLoading && (
                    <VStack justifyContent='center' className={style.profileLoader}>
                        <Loader />
                    </VStack>
                )}

                {!isLoading && !error && (
                    <ProfileCard
                        data={formData}
                        form={<ProfileForm data={formData} />}
                        editButton={canEdit ? <ProfileEditButton /> : null}
                    />
                )}
            </Page>
        </DynamicReducerLoader>
    );
};

export default ProfilePage;
