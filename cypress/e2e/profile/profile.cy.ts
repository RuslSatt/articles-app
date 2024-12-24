import { User } from '../../../src/entities/user';

let profileId: string;

describe('Вход пользователя на страницу профиля', () => {
    beforeEach(() => {
        cy.visit('');
        cy.login().then((user: User) => {
            profileId = user.id;
            cy.visit(`profile/${user.id}`);
        });
    });

    it('Профиль успешно загружен', () => {
        cy.getByTestId('ProfilePage').should('exist');
    });

    it('Пользователь редактирует профиль', () => {
        cy.updateProfile();
        cy.getByTestId('profile-first-name').should('have.value', 'myName');
        cy.getByTestId('profile-last-name').should('have.value', 'myLastName');
    });

    afterEach(() => {
        cy.resetProfile(profileId);
    });
});
