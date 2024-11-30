import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './app/App';
import { ThemeProvider } from '@/app/providers/theme';

import './shared/config/i18n/i18n';
import { StoreProvider } from '@/app/providers/store';

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
    <StoreProvider>
        <BrowserRouter>
            <ThemeProvider>
                <App />
            </ThemeProvider>
        </BrowserRouter>
    </StoreProvider>
);
