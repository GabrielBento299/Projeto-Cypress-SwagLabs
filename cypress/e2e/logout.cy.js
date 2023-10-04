/// <reference types="cypress" />

describe('Sign up Test', () => {
    it('should logout with successfully ', () => {
        cy.login('standard_user', 'secret_sauce');

        cy.get('.bm-burger-button').click();

        cy.contains('.bm-item-list a', 'Logout').click();

        cy.url().should('be.equal', `${Cypress.config('baseUrl')}`);
    });
});