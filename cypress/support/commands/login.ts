import { LOCAL_STORAGE_USER_KEY } from '../../../src/shared/const/storage';

export const login = (username: string, password: string) => {
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
    });
};
