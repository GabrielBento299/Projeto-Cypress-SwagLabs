/// <reference types="cypress" />

describe('Cart Test', () => {
    beforeEach(() => {
        cy.loginCookie();
    });
    
    it('should add a product to cart successfully', () => {
        cy.addProductCart();
        
        cy.get('.shopping_cart_badge').should('have.text', 1);
    });

    it('should add all products to cart successfully', () => {
        cy.addAllProductsCart();

        cy.get('.shopping_cart_badge').should('have.text', 6);
    });

    it('should remove one product in cart with successfully', () => {
        cy.addProductCart();
        cy.get('.shopping_cart_badge').should('have.text', 1);

        cy.removeProduct();
        cy.get('.shopping_cart_link').should('be.empty');
    });

    it('should remove all product in cart with successfully', () => {
        cy.addAllProductsCart();
        cy.get('.shopping_cart_badge').should('have.text', 6);

        cy.removeAllProducts();
        cy.get('.shopping_cart_link').should('be.empty');
    });
});