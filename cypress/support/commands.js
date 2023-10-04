Cypress.Commands.add('logout', () => {
    cy.get('.bm-burger-button').click();
    cy.contains('.bm-item-list a', 'Logout').click();
});