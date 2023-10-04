Cypress.Commands.add('login', (email, password) => {
    cy.visit('/');

    if (email) {
        cy.get('[data-test="username"]').type(email);
    }

    if (password) {
        cy.get('[data-test="password"]').type(password);    
    }
 
    cy.get('[data-test="login-button"]').click();  
});

Cypress.Commands.add('logout', () => {
    cy.get('.bm-burger-button').click();
    cy.contains('.bm-item-list a', 'Logout').click();
});

Cypress.Commands.add('registrationInfos', () => {
    cy.get('[data-test="firstName"]').type('Teste');
    cy.get('[data-test="lastName"]').type('Teste da Silva');
    cy.get('[data-test="postalCode"]').type('123456');
    
    cy.get('[data-test="continue"]').click();
});

Cypress.Commands.add('addProductCart', () => {
    cy.get('.inventory_item')
        .last().children()
        .find('img').click();

    cy.get('.btn_primary').click();
    cy.get('.inventory_details_desc_container .btn_secondary').should('have.text', 'Remove');

});

Cypress.Commands.add('addAllProductsCart', () => {
    cy.get('.btn_primary').each(($el) => {
        cy.wrap($el).click();
    });
});