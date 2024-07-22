import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './app/App';
import { ThemeProvider } from '@/app/providers/theme';

import './shared/config/i18n/i18n';
import { StoreProvider } from '@/app/providers/store';

render(
    <StoreProvider>
        <BrowserRouter>
            <ThemeProvider>
                <App />
            </ThemeProvider>
        </BrowserRouter>
    </StoreProvider>,
    document.getElementById('root')
);
