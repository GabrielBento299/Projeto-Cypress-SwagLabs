/// <reference types="cypress" />

describe('Sign up Test', () => {
    it('should logout with successfully ', () => {
        cy.login('standard_user', 'secret_sauce');
        cy.logout();

        cy.url().should('be.equal', `${Cypress.config('baseUrl')}`);
    });
});