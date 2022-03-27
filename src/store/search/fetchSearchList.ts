import { searchArtistApi } from 'src/services/music-api';

export default async function fetchSearchList(searchTerm: string) {
	try {
		const response = await fetch(searchArtistApi(searchTerm));
		if (!response.ok) {
			throw new Error('Error fetching data from db');
		}
		const data = await response.json();
		const idList: string[] = data.search.data.artists.map((artist: any) => artist.id);

		const results = data.search.data.artists.map((artist: any) => {
			return { id: artist.id, name: artist.name };
		});

		return results;
	} catch (error: any) {
		return error.message;
	}
}
