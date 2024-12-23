export function selectByTestId(testId: string) {
    return cy.get(`[data-testid="${testId}"]`);
}
