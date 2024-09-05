import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { router } from '../model/router';
import { PageLoader } from '@/widgets/PageLoader';
import { RequireAuth } from './RequireAuth';

export const AppRouter = () => (
    <Suspense fallback={<PageLoader />}>
        <Routes>
            {router.map(({ path, element, authOnly }) => (
                <Route
                    key={path}
                    path={path}
                    element={
                        authOnly ? (
                            <RequireAuth>{element as React.ReactElement}</RequireAuth>
                        ) : (
                            element
                        )
                    }
                />
            ))}
        </Routes>
    </Suspense>
);
