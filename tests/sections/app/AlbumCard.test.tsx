import React from 'react';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import AlbumCard from 'src/sections/app/AlbumCard';

test('Album Card displays album info', () => {
	render(
		<AlbumCard
			id='alb.256163'
			thumbnail='http://static.rhap.com/img/170x170/2/8/6/1/27461682_170x170.jpg'
			name='Kid A'
			artist='Radiohead'
			artistId='art.4817'
		/>
	);
	const titles = screen.getAllByRole('link', { name: /kid a/i });
	titles.forEach((title) => {
		expect(title).toBeInTheDocument();
	});
});
