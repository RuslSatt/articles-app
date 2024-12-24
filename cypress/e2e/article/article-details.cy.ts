import { IArticle } from '../../../src/entities/article';

let articleId: string;

describe('Вход пользователя на страницу статьи', () => {
    beforeEach(() => {
        cy.login();
        cy.createArticle().then((article: IArticle) => {
            articleId = article.id;
            cy.visit(`articles/${article.id}`, { failOnStatusCode: false });
        });
    });

    afterEach(() => {
        cy.removeArticle(articleId);
    });

    it('Страница статьи открыта', () => {
        cy.getByTestId('articleDetailsAvatar').should('exist');
    });

    it('Список рекомендуемых статей загружен', () => {
        cy.getByTestId('articleDetailsRecommendations').should('exist');
    });

    it('Отправка комментариев для статьи', () => {
        cy.getByTestId('articleDetailsAvatar').should('exist');
        cy.getByTestId('AddCommentForm').scrollIntoView();
        cy.addComment('my comment');
        cy.getByTestId('CommentCard').should('have.length', 1);
    });

    it('Оценка статьи', () => {
        cy.intercept('GET', '**/articles/*', { fixture: 'article-details.json' });
        cy.getByTestId('articleDetailsAvatar').should('exist');
        cy.getByTestId('RatingCard').scrollIntoView();
        cy.setRate(4, 'feedback');
        cy.get('[data-selected=true]').should('have.length', 4);
    });
});
