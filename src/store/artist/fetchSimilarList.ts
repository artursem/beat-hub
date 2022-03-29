import { getArtistApi } from 'src/services/music-api';
import { apiArtist } from 'src/types/api-types';

export default async function fetchSimilarList(id: string) {
	try {
		const contempoResponse = await fetch(getArtistApi(id, 'similar'));
		if (!contempoResponse.ok) {
			throw new Error('Error fetching contempos from db');
		}
		const contempoData = await contempoResponse.json();
		const similarList: string[] = contempoData.artists
			.map((artist: apiArtist) => artist.id)
			.slice(0, 6);

		return similarList;
	} catch (error: any) {
		throw new Error('Artist not found');
	}
}
