/// <reference types="cypress" />

describe('Cart Test', () => {
    beforeEach(() => {
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
});