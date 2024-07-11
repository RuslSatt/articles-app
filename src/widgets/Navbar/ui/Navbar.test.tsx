import { render, screen } from '@testing-library/react';
import { Navbar } from './Navbar';

describe('Navbar component', () => {
    test('should render', () => {
        render(<Navbar />);
        expect(screen.getByRole('header')).toBeInTheDocument();
    });
});
