import { searchArtistApi } from 'src/services/music-api';
import { apiSearch } from 'src/types/api-types';

export default async function fetchDataThumbnails(searchTerm: string) {
	try {
		const response = await fetch(searchArtistApi(searchTerm));
		if (!response.ok) {
			throw new Error('Error fetching data from db');
		}
		const data = await response.json();

		const imageLinks = data.search.data.artists.map((artist: apiSearch) => artist.links.images);
		const imageResponse = await Promise.all(imageLinks);
		const imageData = await Promise.all(imageResponse.map((res) => res.json()));
		const imageList: string[] = imageData.map((img) =>
			img.meta.returnedCount === 0 ? null : img.images[1].url
		);

		const results = data.search.data.artists.map((artist: apiSearch, idx: number) => {
			return { id: artist.id, name: artist.name, thumbnail: imageList[idx] };
		});

		return results;
	} catch (error: any) {
		return error.message;
	}
}
