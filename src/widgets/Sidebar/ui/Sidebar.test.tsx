import { render, screen } from '@testing-library/react';
import { Sidebar } from './Sidebar';

describe('Sidebar component', () => {
    test('should render', () => {
        render(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });

    test('sidebar toggle', () => {
        render(<Sidebar />);

        const btn = screen.getByTestId('sidebar-toggle');
        btn.click();

        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });
});
