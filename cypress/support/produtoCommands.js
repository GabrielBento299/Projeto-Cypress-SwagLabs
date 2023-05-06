Cypress.Commands.add('addProdutoCarrinho', () => {
    cy.get('.inventory_item')
        .last().children()
        .find('img').click();

    cy.get('.btn_primary').click();
    cy.get('.inventory_details_desc_container .btn_secondary').should('have.text', 'Remove');

});

Cypress.Commands.add('addProdutosCarrinho', () => {
    cy.get('.btn_primary').each(($el) => {
        cy.wrap($el).click();
    });
});