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
