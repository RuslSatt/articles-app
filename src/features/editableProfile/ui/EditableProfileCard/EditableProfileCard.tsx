import { FC } from 'react';
import { useSelector } from 'react-redux';
import style from './EditableProfileCard.module.scss';
import {
    DynamicReducerLoader,
    ReducersList
} from '@/shared/lib/DynamicReducerLoader/DynamicReducerLoader';
import { ProfileCard } from '@/entities/profile';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from '@/shared/lib/hooks/useInitailEffect';
import { getUserData } from '@/entities/user';
import { profileReducer } from '../../model/slice/profileSlice';
import {
    getProfileError,
    getProfileForm,
    getProfileLoading
} from '../../model/selectors/getProfileData';
import { fetchProfileData } from '../../model/services/fetchProfileData/fetchProfileData';
import { ProfileForm } from '../ProfileForm/ProfileForm';
import { ProfileEditButton } from '../ProfileEditButton/ProfileEditButton';
import { Message, Severity } from '@/shared/ui/Message/Message';
import { VStack } from '@/shared/ui/Stack/VStack/VStack';
import { Loader } from '@/shared/ui/Loader/Loader';

export interface EditableProfileCardProps {
    className?: string;
    paramId?: string;
}

const reducersList: ReducersList = {
    profile: profileReducer
};

export const EditableProfileCard: FC<EditableProfileCardProps> = (props) => {
    const { className, paramId } = props;

    const dispatch = useAppDispatch();

    const isLoading = useSelector(getProfileLoading);
    const error = useSelector(getProfileError);
    const formData = useSelector(getProfileForm);
    const authData = useSelector(getUserData);
    const canEdit = formData?.id === authData?.id;

    useInitialEffect(() => {
        const id = paramId ?? formData?.id;

        if (id) dispatch(fetchProfileData(id));
    });

    if (isLoading) {
        return (
            <VStack justifyContent='center' className={style.loader}>
                <Loader />
            </VStack>
        );
    }

    return (
        <DynamicReducerLoader reducersList={reducersList}>
            {error && <Message severity={Severity.ERROR} text={error} />}

            <ProfileCard
                data={formData}
                form={<ProfileForm data={formData} />}
                editButton={canEdit ? <ProfileEditButton /> : null}
            />
        </DynamicReducerLoader>
    );
};
