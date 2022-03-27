import { InitialArtist } from 'src/types/app-types';
import { getArtistApi } from 'src/services/music-api';

export default async function fetchInitialArtist(id: string) {
	try {
		const response = await fetch(getArtistApi(id));
		if (!response.ok) {
			throw new Error('Error fetching artist from db');
		}
		const data = await response.json();

		let genresLink = null;
		if (data.artists[0].links.genres.href) {
			genresLink = data.artists[0].links.genres.href;
		}

		let contemposLink = null;
		if (data.artists[0].links.contemporaries) {
			contemposLink = data.artists[0].links.contemporaries.href;
		}

		const bio = data.artists[0].bios ? data.artists[0].bios[0].bio : 'No bio available';

		const foundArtist: InitialArtist = {
			id,
			name: data.artists[0].name,
			bio,
			contemposLink,
			genresLink,
		};

		return foundArtist;
	} catch (error: any) {
		throw new Error('Artist not found');
	}
}
