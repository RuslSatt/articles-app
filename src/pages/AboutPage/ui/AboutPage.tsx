import React from 'react';
import { useTranslation } from 'react-i18next';

const AboutPage = () => {
    const { t } = useTranslation();

    return <div>{t('ABOUT')}</div>;
};

export default AboutPage;
