/// <reference types="cypress" />

describe('Products Test', () => {
    beforeEach(() => {
        cy.loginCookie();
    });

    it('should successfully purchase a product', () => {
        cy.addProductCart();

        cy.get('.shopping_cart_link').click();
        
        cy.get('[data-test="checkout"]').click();

        cy.registrationInfos();

        cy.get('.summary_total_label').should('have.text', 'Total: $17.27');
        cy.get('[data-test="finish"]').click();
        
        cy.get('.title').contains('Checkout: Complete!').should('be.visible');
        cy.get('.complete-header')
            .should('be.visible')
            .and('contain', 'Thank you for your order!');
    });

    it('should successfully purchase all product', () => {
        cy.addAllProductsCart();

        cy.get('.shopping_cart_link').click();
        cy.get('[data-test="checkout"]').click();

        cy.registrationInfos();

        cy.get('.summary_total_label').should('have.text', 'Total: $140.34');
        cy.get('[data-test="finish"]').click();

        cy.get('.title').contains('Checkout: Complete!').should('be.visible');
        cy.get('.complete-header')
            .should('be.visible')
            .and('contain', 'Thank you for your order!');
    });
});