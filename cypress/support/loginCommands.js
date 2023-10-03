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