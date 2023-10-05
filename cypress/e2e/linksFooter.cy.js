/// <reference types="cypress" />

import socialMedia from '../fixtures/social_media';
describe('Links Footer Test', () => {
    it('should open the links with and be redirected to each one successfully', () => {
        cy.loginCookie();

        socialMedia.forEach(({ social, url })  => {
            cy.get(`.social_${social} a`)
                .should('have.attr', 'href', url)
                .and('have.attr', 'target', '_blank');
        });
    });
});