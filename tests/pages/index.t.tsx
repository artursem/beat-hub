import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import IndexPage, { getStaticProps } from 'src/pages/index';
import { Album, ListArtists } from 'src/types/app-types';

test('Searchbox renders input', () => {
	const topAl: Album[] = [
		{
			id: 'albumId',
			name: 'albumName',
			thumbnail: 'albumThumbnail',
			artist: 'albumArtist',
			artistId: 'artistId',
		},
	];
	const topArt: ListArtists[] = [
		{ id: 'artistId', name: 'artistName', thumbnail: 'artistThumbnail' },
	];
	render(<IndexPage topAlbums={topAl} topArtists={topArt} />);
	const headerArtist = screen.findByRole('heading', { name: /top artists/i });
	// expect(headerArtist).toBeInTheDocument();
});
