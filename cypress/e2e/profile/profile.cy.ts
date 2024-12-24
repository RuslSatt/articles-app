import { selectByTestId } from 'cypress/helpers/selectByTestId';
import { User } from '../../../src/entities/user';

describe('Вход пользователя на страницу профиля', () => {
    beforeEach(() => {
        cy.visit('');
        cy.login('admin', '123').then((user: User) => {
            cy.visit(`profile/${user.id}`);
        });
    });

    it('Профиль успешно загружен', () => {
        cy.getByTestId('ProfilePage').should('exist');
    });
});
