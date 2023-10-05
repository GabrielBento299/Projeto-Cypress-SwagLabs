Cypress.Commands.add('login', (email, password) => {
    cy.visit('/');

    if (email) {
        cy.get('[data-test="username"]').type(email);
    }

    if (password) {
        cy.get('[data-test="password"]').type(password, { log: false });    
    }
 
    cy.get('[data-test="login-button"]').click();  
});

Cypress.Commands.add('loginCookie', () => {
    cy.setCookie('session-username', Cypress.env('USER_EMAIL'));
    cy.visit('/inventory.html', { failOnStatusCode: false });
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

Cypress.Commands.add('removeProduct', () => {
    cy.contains('button', 'Remove').click();
});

Cypress.Commands.add('removeAllProducts', () => {
    cy.get('.btn_secondary').each(($el) => {
        cy.wrap($el).click();
    });
});

Cypress.Commands.add('messageError', message => {
    cy.get('[data-test="error"]').should('be.visible').and('have.text', message);

});