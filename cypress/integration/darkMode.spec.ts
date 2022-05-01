/// <reference types="cypress"/>

context('UI theme', () => {
	beforeEach(() => {
		cy.visit('http://localhost:3000');
	});
	it('should change on button click', () => {
		cy.wait(3000);
		cy.clearLocalStorage().should((ls) => {
			expect(ls.getItem('chakra-ui-color-mode')).to.be.null;
		});
		cy.get('button')
			.contains(/Light/)
			.click()
			.should(() => {
				expect(localStorage.getItem('chakra-ui-color-mode')).to.eq('light');
			});
		cy.wait(3000);
		cy.get('button')
			.contains(/Dark/)
			.click()
			.should(() => {
				expect(localStorage.getItem('chakra-ui-color-mode')).to.eq('dark');
			});
	});
});
