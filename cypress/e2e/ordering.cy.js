/// <reference types="cypress" />

describe('Order Test', () => {
    beforeEach(() => {
        cy.loginCookie();
    });

    context('Price', () => {
        it('should order by the price (high to low)', () => {
            cy.get('[data-test="product_sort_container"]').select('hilo');

            cy.get('.inventory_item_price')
                .first()
                .should('contain', '$49.99');
            cy.get('.inventory_item_price')
                .last()
                .should('contain', '$7.99');
        });

        it('should order by the price low to how)', () => {
            cy.get('[data-test="product_sort_container"]').select('lohi');

            cy.get('.inventory_item_price')
                .first()
                .should('contain', '$7.99');
            cy.get('.inventory_item_price')
                .last()
                .should('contain', '$49.99');
        });
    });

    context('Name', () => {
        it('should order by the name (A to Z)', () => {
            cy.get('[data-test="product_sort_container"]').select('az');

            cy.get('.inventory_item_name')
                .first()
                .should('contain', 'Sauce');
            cy.get('.inventory_item_name')
                .last()
                .should('contain', 'Test');
        });

        it('should order by the price (Z to A)', () => {
            cy.get('[data-test="product_sort_container"]').select('za');

            cy.get('.inventory_item_name')
                .first()
                .should('contain', 'Test');
            cy.get('.inventory_item_name')
                .last()
                .should('contain', 'Sauce');
        });
    });
});