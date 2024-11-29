import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';

export interface IAdminPanelPageProps {
    className?: string;
}

const AdminPanelPage = (props: IAdminPanelPageProps) => {
    const { className } = props;

    const { t } = useTranslation();

    return <Page>{t('Admin panel')}</Page>;
};

export default AdminPanelPage;
