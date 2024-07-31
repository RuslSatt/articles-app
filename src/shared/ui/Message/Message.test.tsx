import { render, screen } from '@testing-library/react';
import { Message, Severity } from './Message';

describe('Message', () => {
    test('success', () => {
        render(<Message severity={Severity.SUCCESS} text='test' />);
        const message = screen.getByTestId('message');
        if (message) {
            expect(message).toHaveClass('success');
        }
    });

    test('error', () => {
        render(<Message severity={Severity.ERROR} text='test' />);
        const message = screen.getByTestId('message');
        if (message) {
            expect(message).toHaveClass('error');
        }
    });
});
