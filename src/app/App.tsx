import './styles/index.scss';
import { Suspense } from 'react';
import { useTheme } from '@/app/providers/theme';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppRouter } from './providers/router';
import { Navbar } from '@/widgets/Navbar';
import { Sidebar } from '@/widgets/Sidebar';
import ErrorBoundary from '@/app/providers/ErrorBoundary';

const App = () => {
    const { theme } = useTheme();

    return (
        <div className={classNames('app', [theme])}>
            <ErrorBoundary>
                <Suspense fallback="">
                    <Navbar />
                    <div className="content-page">
                        <Sidebar />
                        <div className="page-wrapper">
                            <AppRouter />
                        </div>
                    </div>
                </Suspense>
            </ErrorBoundary>
        </div>
    );
};

export default App;
