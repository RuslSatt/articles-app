export const setRate = (star: number = 5, feedback: string = 'feedback') => {
    cy.getByTestId(`StarRating-${star}`).click();
    cy.getByTestId('RatingCardInput').type(feedback);
    cy.getByTestId('RatingCardAccept').click();
};

declare global {
    namespace Cypress {
        interface Chainable {
            setRate(star: number, feedback?: string): Chainable<void>;
        }
    }
}
