import { getArtistApi } from 'src/services/music-api';
import { ListArtists } from 'src/types/app-types';

export default async function fetchLibItem(id: string): Promise<ListArtists> {
	try {
		const url = getArtistApi(id);
		const artistResponse = await fetch(url);
		const artistData = await artistResponse.json();

		const urlImage = getArtistApi(id, 'images');
		const imageResponse = await fetch(urlImage);
		const imageData = await imageResponse.json();

		const thumbnail = imageData.meta.returnedCount === 0 ? null : imageData.images[0].url;

		return {
			name: artistData.artists[0].name,
			id: artistData.artists[0].id,
			thumbnail,
		};
	} catch (error) {
		throw new Error('Error fetching library item');
	}
}
