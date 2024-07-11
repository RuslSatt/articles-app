import { screen } from '@testing-library/react';
import { Navbar } from './Navbar';
import { renderWithTranslation } from '@/shared/lib/renderWithTranslation/renderWithTranslation';

describe('Navbar component', () => {
    test('should render', () => {
        renderWithTranslation(<Navbar />);
        expect(screen.getByRole('header')).toBeInTheDocument();
    });
});
