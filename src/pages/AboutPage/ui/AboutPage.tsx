import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';

const AboutPage = () => {
    const { t } = useTranslation();

    return <Page dataTestId='AboutPage'>{t('ABOUT')}</Page>;
};

export default AboutPage;
