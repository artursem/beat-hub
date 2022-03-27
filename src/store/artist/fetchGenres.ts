import { FoundArtist } from 'src/types/app-types';
import { getArtistApi, getGenericApi, getTopAlbumsByArtist } from 'src/services/music-api';

export default async function fetchGenres(link: string) {
	try {
		const genreResponse = await fetch(getGenericApi(link));
		if (!genreResponse.ok) {
			throw new Error('Error fetching genres from db');
		}
		const genreData = await genreResponse.json();
		const genres = genreData.genres.map((g: any) => g.name).slice(0, 5) || null;

		return genres;
	} catch (error: any) {
		throw new Error('Artist not found');
	}
}
