export const addComment = (text: string) => {
    cy.getByTestId('AddCommentFormInput').clear().type(text);
    cy.getByTestId('AddCommentFormButton').click();
};

declare global {
    namespace Cypress {
        interface Chainable {
            addComment(text: string): Chainable<void>;
        }
    }
}
