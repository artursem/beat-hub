import { searchArtistApi } from 'src/services/music-api';
import { apiSearch } from 'src/types/api-types';

export default async function fetchSearchList(searchTerm: string) {
	try {
		const response = await fetch(searchArtistApi(searchTerm));
		if (!response.ok) {
			throw new Error('Error fetching data from db');
		}
		const data = await response.json();

		const results = data.search.data.artists.map((artist: apiSearch) => {
			return { id: artist.id, name: artist.name };
		});

		return results;
	} catch (error: any) {
		return error.message;
	}
}
