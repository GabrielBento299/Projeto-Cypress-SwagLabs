Cypress.Commands.add('cadastroInfos', () => {
    cy.get('[data-test="firstName"]').type('Teste');
    cy.get('[data-test="lastName"]').type('Teste da Silva');
    cy.get('[data-test="postalCode"]').type('123456');
    
    cy.get('[data-test="continue"]').click();
});