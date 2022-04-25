/// <reference types="cypress"/>

context('Home Page', () => {
	beforeEach(() => {
		cy.visit('http://localhost:3000');
	});

	it('should have Top Artists list', () => {
		cy.get('h2').contains('Top Artists');

		cy.get('ul').should('have.length', 5);
	});
	it('should have Top Albums list', () => {
		cy.get('h2').contains('Top Albums');
	});
});
