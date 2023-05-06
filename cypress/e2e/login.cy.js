/// <reference types="cypress" />

describe('Teste funcional de login', () => {
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/');
    });

    it('Deve fazer login com sucesso', () => {
        cy.login('standard_user', 'secret_sauce');

        cy.get('.header_secondary_container .title')
            .contains('Products')
            .should('be.visible');
    });

    it('Deve exibir uma mensagem de erro ao inserir o usuário inválido', () => {
        cy.login('teste', 'secret_sauce');
         
        cy.get('[data-test="error"]')
            .contains('Epic sadface: Username and password do not match any user in this service')
            .should('be.visible');
    });
    it('Deve exibir uma mensagem de erro ao inserir senha inválida', () => {
        cy.login('standard_user', 'teste123');
         
        cy.get('[data-test="error"]')
            .contains('Epic sadface: Username and password do not match any user in this service')
            .should('be.visible');
    });
    it('Deve exibir uma mensagem de erro ao submitar o formualario sem prenhcer os campos', () => {
        cy.login('', '');

        cy.get('[data-test="error"]')
            .contains('Epic sadface: Username is required')
            .should('be.visible');
    });
});



