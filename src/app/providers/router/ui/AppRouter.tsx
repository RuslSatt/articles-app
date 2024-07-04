import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { router } from '../model/router';

export const AppRouter = () => (
    <Suspense fallback="loading">
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
