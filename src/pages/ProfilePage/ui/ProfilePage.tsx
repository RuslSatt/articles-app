import { FC } from 'react';
import { useParams } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames/classNames';
import { EditableProfileCard } from '@/features/editableProfile';
import { Page } from '@/widgets/Page/ui/Page';

export interface ProfilePageProps {
    className?: string;
}

const ProfilePage: FC<ProfilePageProps> = (props) => {
    const { className } = props;

    const paramId = useParams<{ id: string }>()?.id;

    return (
        <Page className={classNames('', [className])}>
            <EditableProfileCard paramId={paramId} />
        </Page>
    );
};

export default ProfilePage;
