import { IArticle } from '../../../src/entities/article';

const defaultArticle = {
    id: '25',
    title: 'Useful C++ Features Using Pipeline Organization as an Example',
    subtitle: 'Основы С++ и пайплайн',
    img: 'https://habrastorage.org/r/w1560/getpro/habr/upload_files/209/cea/d25/209cead25df986582059211d575bd2bf.png',
    views: 1000,
    createdAt: '30.10.2024',
    userId: '3',
    type: ['IT'],
    blocks: []
};

export const createArticle = (article?: IArticle) => {
    cy.request({
        method: 'POST',
        url: `http://localhost:8000/articles`,
        body: article ?? defaultArticle,
        headers: { Authorization: 'Bearer 123' },
        failOnStatusCode: false
    }).then(({ body }) => {
        return body;
    });
};

export const removeArticle = (articleId: string) => {
    cy.request({
        method: 'DELETE',
        url: `http://localhost:8000/articles/${articleId}`,
        headers: { Authorization: 'Bearer 123' },
        failOnStatusCode: false
    });
};

declare global {
    namespace Cypress {
        interface Chainable {
            createArticle(article?: IArticle): Chainable<IArticle>;
            removeArticle(articleId: string): Chainable<void>;
        }
    }
}
