/// <reference types="cypress"/>

context('Home Page', () => {
	beforeEach(() => {
		cy.visit('http://localhost:3000');
	});
	it('should have Top Artists list', () => {
		cy.get('h2').contains('Top Artists');
	});
	it('should have Top Albums list', () => {
		cy.get('h2').contains('Top Albums');
	});
});

context('Search feature', () => {
	it('should take search input', () => {
		cy.get('input').type('the beatles');
		cy.contains('The Beatles').click();
		cy.url().should('include', '/artist/art.61025');
		cy.location().should((location) => {
			expect(location.pathname).to.eq('/artist/art.61025');
		});
		cy.get('h2').should('contain', 'The Beatles');
	});
});
