import { selectByTestId } from 'cypress/helpers/selectByTestId';

describe('Маршрутизация', () => {
    describe('Пользователь не авторизован', () => {
        it('Переход на главную страницу', () => {
            cy.visit('/');
            selectByTestId('MainPage').should('exist');
        });
        it('Попытка перехода на страницу профиля', () => {
            cy.visit('/profile/1');
            selectByTestId('MainPage').should('exist');
        });
        it('Переход на не существующий адрес', () => {
            cy.visit('/not');
            selectByTestId('NotPageFound').should('exist');
        });
    });
    describe('Пользователь авторизован', () => {
        beforeEach(() => {
            cy.login('admin', '123');
        });

        it('Переход на страницу профиля', () => {
            cy.visit('/profile/1');
            selectByTestId('ProfilePage').should('exist');
        });
        it('Переход на страницу со списком статей', () => {
            cy.visit('/articles');
            selectByTestId('ArticlesPage').should('exist');
        });
    });
});
