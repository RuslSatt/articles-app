import './styles/index.scss';
import { Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppRouter } from './providers/router';
import { Navbar } from '@/widgets/Navbar';
import { Sidebar } from '@/widgets/Sidebar';
import ErrorBoundary from './providers/ErrorBoundary';
import { getUserMounted, userActions } from '@/entities/user';
import { useTheme } from '@/shared/lib/hooks/useTheme';

const App = () => {
    const { theme } = useTheme();
    const dispatch = useDispatch();

    const mounted = useSelector(getUserMounted);

    useEffect(() => {
        dispatch(userActions.initUser());
    }, [dispatch]);

    return (
        <div className={classNames('app', [theme])}>
            <ErrorBoundary>
                <Suspense fallback=''>
                    <Navbar />
                    <div className='content-page'>
                        <Sidebar />
                        {mounted && <AppRouter />}
                    </div>
                </Suspense>
            </ErrorBoundary>
        </div>
    );
};

export default App;
