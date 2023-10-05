/// <reference types="cypress" />

describe('Login Test', () => {
    const email = Cypress.env('USER_EMAIL');
    const password = Cypress.env('USER_PASSWORD');
    it('should login with successfully', () => {
        cy.login(email, password);

        cy.url().should('be.equal', `${Cypress.config('baseUrl')}inventory.html`);
        cy.get('.header_secondary_container .title')
            .should('be.visible')
            .contains('Products');
    });

    it('Should display an error message when entering invalid user', () => {
        cy.login('teste', password);

        cy.messageError('Epic sadface: Username and password do not match any user in this service');
    });

    it('Should display an error message when entering invalid password', () => {
        cy.login(email, 'teste123');

        cy.messageError('Epic sadface: Username and password do not match any user in this service');
    });

    it('should display an error message when not filling in the email', () => {
        cy.login('', password);
        
        cy.messageError('Epic sadface: Username is required');
    });

    it('should display an error message when not filling in the password', () => {
        cy.login(email, '');

        cy.messageError('Epic sadface: Password is required');
    });

    it('should display an error message when not filling in the email field and password', () => {
        cy.login('', '');

        cy.messageError('Epic sadface: Username is required');
    });
});



