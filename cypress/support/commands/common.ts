import { LOCAL_STORAGE_USER_KEY } from '../../../src/shared/const/storage';
import { User } from '../../../src/entities/user';
import { selectByTestId } from 'cypress/helpers/selectByTestId';

export const login = (username: string = 'testUser', password: string = '123') => {
    cy.request({
        method: 'POST',
        url: 'http://localhost:8000/login',
        body: {
            username,
            password
        },
        failOnStatusCode: false
    }).then(({ body }) => {
        window.localStorage.setItem(LOCAL_STORAGE_USER_KEY, JSON.stringify(body));
        return body;
    });
};

export const getByTestId = (testId: string) => {
    return cy.get(selectByTestId(testId));
};

declare global {
    namespace Cypress {
        interface Chainable {
            login(username?: string, password?: string): Chainable<User>;
            getByTestId(testId: string): Chainable<JQuery<HTMLElement>>;
        }
    }
}
