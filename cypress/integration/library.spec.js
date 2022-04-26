/// <reference types="cypress"/>

context('Add to library feature', () => {
	it('should add artist to localStorage', () => {
		cy.visit('http://localhost:3000/artist/art.61025');
		cy.clearLocalStorage().should((ls) => {
			expect(ls.getItem('library')).to.be.null;
		});
		cy.contains('Add to Library')
			.click()
			.should(() => {
				expect(localStorage.getItem('library')).to.eq('["art.61025"]');
			});
	});
});

context('Library page', () => {
	beforeEach(() => {
		cy.visit('http://localhost:3000/artist/art.61025');
		cy.contains('Add to Library').click();
		cy.visit('http://localhost:3000/library');
	});
	it('has artist in localStorage', () => {
		expect(localStorage.getItem('library')).to.eq('["art.61025"]');
	});
	it('displays library', () => {
		cy.get('a').should('contain', 'The Beatles');
	});
	it('removes artist from library and localStorage', () => {
		cy.contains('In your Library')
			.click()
			.should(() => {
				expect(localStorage.getItem('library')).to.eq('[]');
			});
		cy.get('h3').contains('Your library is empty. Please add artists you enjoy');
	});
});

// view library, remove artist
// navigation
// cy.go(-1)
//     cy.location('pathname').should('not.include', 'navigation')
// darkmode
