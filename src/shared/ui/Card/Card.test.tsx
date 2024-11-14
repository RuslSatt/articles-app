import { render, screen } from '@testing-library/react';
import { Card } from './Card';

describe('Card component', () => {
    test('should render', () => {
        render(<Card>TEST</Card>);
        expect(screen.getByText('TEST')).toBeInTheDocument();
    });
});
