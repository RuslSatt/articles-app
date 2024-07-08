import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { router } from '../model/router';
import { PageLoader } from '@/widgets/PageLoader';

export const AppRouter = () => (
    <Suspense fallback={<PageLoader />}>
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
