import { screen } from '@testing-library/react';
import { Sidebar } from './Sidebar';
import { renderComponent } from '@/shared/lib/renderComponent/renderComponent';

describe('Sidebar component', () => {
    test('should render', () => {
        renderComponent(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });

    test('sidebar toggle', () => {
        renderComponent(<Sidebar />);

        const btn = screen.getByTestId('sidebar-toggle');
        btn.click();

        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });
});
