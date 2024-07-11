import { render, screen } from '@testing-library/react';
import { Button } from './Button';

describe('Button component', () => {
    test('should render', () => {
        render(<Button />);
        expect(screen.getByRole('button')).toBeInTheDocument();
    });

    test('should render label param', () => {
        render(<Button label='TEST' />);
        expect(screen.getByText('TEST')).toBeInTheDocument();
    });

    test('should render text param', () => {
        render(<Button label='TEST' text />);
        expect(screen.getByText('TEST')).toHaveClass('text');
    });
});
