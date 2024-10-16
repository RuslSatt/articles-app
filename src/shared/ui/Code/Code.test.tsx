import { render, screen } from '@testing-library/react';
import { Code } from './Code';

describe('Code component', () => {
    test('should render', () => {
        render(<Code />);
        expect(screen.getByRole('button')).toBeInTheDocument();
    });

    test('should render text param', () => {
        render(<Code text='TEST' />);
        expect(screen.getByText('TEST')).toBeInTheDocument();
    });
});
