/// <reference types="cypress" />

describe('Products Test', () => {
    beforeEach(() => {
        cy.visit('/');

        cy.login('standard_user', 'secret_sauce');
    });

    it('should add a product to cart successfully', () => {
        cy.addProductCart();
        
        cy.get('.shopping_cart_badge').should('have.text', 1);
    });

    it('should add all products to cart successfully', () => {
        cy.addAllProductsCart();

        cy.get('.shopping_cart_badge').should('have.text', 6);
    });

    it('should successfully purchase a product', () => {
        cy.addProductCart();

        cy.get('.shopping_cart_link').click();
        
        cy.get('[data-test="checkout"]').click();

        cy.cadastroInfos();

        cy.get('.summary_total_label').should('have.text', 'Total: $17.27');
        cy.get('[data-test="finish"]').click();
        
        cy.get('.title').contains('Checkout: Complete!').should('be.visible');
        cy.get('.complete-header').should('have.text', 'Thank you for your order!');
        cy.get('.complete-text').should('have.text', 'Your order has been dispatched, and will arrive just as fast as the pony can get there!');
    });

    it('should successfully purchase all product', () => {
        cy.addAllProductsCart();

        cy.get('.shopping_cart_link').click();
        cy.get('[data-test="checkout"]').click();

        cy.cadastroInfos();

        cy.get('.summary_total_label').should('have.text', 'Total: $140.34');
        cy.get('[data-test="finish"]').click();

        cy.get('.title').contains('Checkout: Complete!').should('be.visible');
        cy.get('.complete-header').should('have.text', 'Thank you for your order!');
        cy.get('.complete-text').should('have.text', 'Your order has been dispatched, and will arrive just as fast as the pony can get there!');
    });
});