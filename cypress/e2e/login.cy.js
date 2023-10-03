/// <reference types="cypress" />

describe('Teste funcional de login', () => {
    it('should login with successfully', () => {
        cy.login('standard_user', 'secret_sauce');

        cy.url().should('be.equal', `${Cypress.config('baseUrl')}inventory.html`);
        cy.get('.header_secondary_container .title')
            .should('be.visible')
            .contains('Products');
    });

    it('Should display an error message when entering invalid user', () => {
        cy.login('teste', 'secret_sauce');
         
        cy.get('[data-test="error"]').contains('Epic sadface: Username and password do not match any user in this service').should('be.visible');
    });

    it('Should display an error message when entering invalid password', () => {
        cy.login('standard_user', 'teste123');
         
        cy.get('[data-test="error"]').contains('Epic sadface: Username and password do not match any user in this service').should('be.visible');
    });

    it('should display an error message when not filling in the email', () => {
        cy.login('', 'teste123');

        cy.get('[data-test="error"]').contains('Epic sadface: Username is required').should('be.visible');
    });
    it('should display an error message when not filling in the password', () => {
        cy.login('email@teste.com', '');

        cy.get('[data-test="error"]').contains('Epic sadface: Password is required').should('be.visible');
    });
    it('should display an error message when not filling in the email field and password', () => {
        cy.login('', '');

        cy.get('[data-test="error"]').contains('Epic sadface: Username is required').should('be.visible');
    });
});



