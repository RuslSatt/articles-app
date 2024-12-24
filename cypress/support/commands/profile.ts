export const updateProfile = () => {
    cy.getByTestId('profile-edit-button').click();
    cy.getByTestId('profile-first-name').clear().type('myName');
    cy.getByTestId('profile-last-name').clear().type('myLastName');
    cy.getByTestId('profile-save-button').click();
};

export const resetProfile = (profileId: string) => {
    cy.request({
        method: 'PUT',
        url: `http://localhost:8000/profile/${profileId}`,
        headers: { Authorization: 'Bearer 123' },
        body: {
            id: '3',
            first: 'User',
            lastname: 'Test',
            age: 1,
            currency: 'RUB',
            country: 'RU',
            city: 'Уфа',
            username: 'testUser',
            avatar: 'https://img.kupigolos.ru/hero/5f40c310ab69d.png?p=bh&s=67737a924da032027fdf8f9d7a897e6b'
        },
        failOnStatusCode: false
    });
};

declare global {
    namespace Cypress {
        interface Chainable {
            updateProfile(): Chainable<void>;
            resetProfile(profileId: string): Chainable<void>;
        }
    }
}
