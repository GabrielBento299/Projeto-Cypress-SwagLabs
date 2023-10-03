Cypress.Commands.add('login', (usuario, senha) => {
    cy.visit('https://www.saucedemo.com/');
    
    if(usuario && senha) {
        cy.get('[data-test="username"]').type(usuario);
        cy.get('[data-test="password"]').type(senha);    
    }
 
    cy.get('[data-test="login-button"]').click();  
});