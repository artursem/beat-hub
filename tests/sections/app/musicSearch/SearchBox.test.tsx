import React, { ReactElement } from 'react';
import { Provider } from 'react-redux';
import store from 'src/store/store';
import { screen, render as rtlRender } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SearchBox from 'src/sections/app/musicSearch/SearchBox';

const render = (component: ReactElement) =>
	rtlRender(<Provider store={store}>{component}</Provider>);

test('Search for artist - hp', () => {
	render(<SearchBox />);
	const textInput = screen.getByRole('textbox', { name: 'Search' });
	expect(textInput).toBeInTheDocument();
});
