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
		cy.get('h2').should('contain', 'The Beatles');
	});
});

context('Add to library feature', () => {
	it('should add artist to localStorage', () => {
		cy.clearLocalStorage().should((ls) => {
			expect(ls.getItem('library')).to.be.null;
		});
		cy.visit('http://localhost:3000/artist/art.61025');
		cy.contains('Add to Library')
			.click()
			.should(() => {
				expect(localStorage.getItem('library')).to.eq('["art.61025"]');
			});
	});
});

// view library
// darkmode
