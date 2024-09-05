import './styles/index.scss';
import { Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTheme } from '@/app/providers/theme';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppRouter } from './providers/router';
import { Navbar } from '@/widgets/Navbar';
import { Sidebar } from '@/widgets/Sidebar';
import ErrorBoundary from '@/app/providers/ErrorBoundary';
import { getUserMounted, userActions } from '@/entities/user';

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
                        <div className='page-wrapper'>{mounted && <AppRouter />}</div>
                    </div>
                </Suspense>
            </ErrorBoundary>
        </div>
    );
};

export default App;
