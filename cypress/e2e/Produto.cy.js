/// <reference types="cypress" />

describe('Teste funcional de produtos', () => {
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/');
        cy.screenshot();

        cy.login('standard_user', 'secret_sauce');
    });

    it('Deve adicionar um produto produto ao carrinho com sucesso', () => {
        cy.addProdutoCarrinho();
        
        cy.get('.shopping_cart_badge').should('have.text', 1);
    });

    it('Deve Adicionar todos os produtos ao carrinho com sucesso', () => {
        cy.addProdutosCarrinho();

        cy.get('.shopping_cart_badge').should('have.text', 6);
    });

    it('Deve fazer a compra de um produto com sucesso', () => {
        cy.addProdutoCarrinho();

        cy.get('.shopping_cart_link').click();
        
        cy.get('[data-test="checkout"]').click();

        cy.cadastroInfos();

        cy.get('.summary_total_label').should('have.text', 'Total: $17.27');
        cy.get('[data-test="finish"]').click();
        
        cy.get('.title').contains('Checkout: Complete!').should('be.visible');
        cy.get('.complete-header').should('have.text', 'Thank you for your order!');
        cy.get('.complete-text').should('have.text', 'Your order has been dispatched, and will arrive just as fast as the pony can get there!');
    });

    it('Deve fazer a compra de todos os produto com sucesso', () => {
        cy.addProdutosCarrinho();

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