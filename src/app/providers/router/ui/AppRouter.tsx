import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { router } from '../model/router';

export const AppRouter = () => {
    const { t } = useTranslation();

    return (
        <Suspense fallback={t('loading')}>
            <Routes>
                {router.map(({ path, element }) => (
                    <Route
                        key={path}
                        path={path}
                        element={element}
                    />
                ))}
            </Routes>
        </Suspense>
    );
};
