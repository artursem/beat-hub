import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SearchBox from '../../../../src/sections/app/musicSearch/SearchBox';

test('Searchbox renders input', () => {
	render(<SearchBox />);
	const searchInput = screen.findByRole('textbox', { name: /search/i });
	// expect(searchInput).toBeInTheDocument();
});
