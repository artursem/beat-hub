import React, { ReactElement } from 'react';
import { Provider } from 'react-redux';
import store from 'src/store/store';
import { screen, render as rtlRender, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SearchBox from 'src/sections/app/musicSearch/SearchBox';

const render = (component: ReactElement) =>
	rtlRender(<Provider store={store}>{component}</Provider>);

test('Search for artist - hp', async () => {
	render(<SearchBox />);
	const searchInput = screen.getByRole('textbox', { name: 'Search' });
	expect(searchInput).toBeInTheDocument();
	userEvent.clear(searchInput);
	userEvent.type(searchInput, 'The Beatles');
	const spinner = screen.getByRole('');
	// await waitFor(async () => {
	// 	const resultList = await screen.findByRole('list');
	// 	expect(resultList).toHaveLength(5);
	// });
});
