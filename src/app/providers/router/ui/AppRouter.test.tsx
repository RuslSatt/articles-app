import { screen } from '@testing-library/react';
import { renderComponent } from '@/shared/lib/tests/renderComponent/renderComponent';
import { AppRouter } from './AppRouter';
import { getRouteAbout, getRouteAdminPanel, getRouteProfile } from '@/shared/types/router';
import { UserRole } from '@/entities/user';

describe('AppRouter', () => {
    test('Page should be render', async () => {
        renderComponent(<AppRouter />, {
            route: getRouteAbout()
        });

        const page = await screen.findByTestId('AboutPage');

        expect(page).toBeInTheDocument();
    });

    test('Page should be not found', async () => {
        renderComponent(<AppRouter />, {
            route: '/not'
        });

        const page = await screen.findByTestId('NotPageFound');

        expect(page).toBeInTheDocument();
    });

    test('Page should not be opened if the user is not auth', async () => {
        renderComponent(<AppRouter />, {
            route: getRouteProfile('1')
        });

        const page = await screen.findByTestId('MainPage');

        expect(page).toBeInTheDocument();
    });

    test('Page should be open if the user is auth', async () => {
        renderComponent(<AppRouter />, {
            route: getRouteProfile('1'),
            initialState: {
                user: {
                    user: {
                        id: '1',
                        username: 'admin'
                    }
                }
            }
        });

        const page = await screen.findByTestId('ProfilePage');

        expect(page).toBeInTheDocument();
    });

    test('Page should not be opened if the user is not role', async () => {
        renderComponent(<AppRouter />, {
            route: getRouteAdminPanel(),
            initialState: {
                user: {
                    user: {
                        id: '1',
                        username: 'admin'
                    }
                }
            }
        });

        const page = await screen.findByTestId('ForbiddenPage');

        expect(page).toBeInTheDocument();
    });

    test('Page should be open if the user is role', async () => {
        renderComponent(<AppRouter />, {
            route: getRouteAdminPanel(),
            initialState: {
                user: {
                    user: {
                        id: '1',
                        username: 'admin',
                        roles: [UserRole.ADMIN]
                    }
                }
            }
        });

        const page = await screen.findByTestId('AdminPanelPage');

        expect(page).toBeInTheDocument();
    });
});
