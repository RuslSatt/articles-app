describe('Вход пользователя на страницу списка статей', () => {
    beforeEach(() => {
        cy.visit('');
        cy.login().then(() => {
            cy.visit(`articles`);
        });
    });

    it('Страница статей успешно загружена', () => {
        cy.getByTestId('ArticlesPage').should('exist');
        cy.getByTestId('ArticleList').should('exist');
        cy.getByTestId('ArticleListItem').should('have.length.greaterThan', 3);
    });
});
