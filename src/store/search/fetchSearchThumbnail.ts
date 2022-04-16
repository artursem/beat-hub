import { searchArtistApi, getArtistApi } from 'src/services/music-api';
import { ListArtists } from 'src/types/app-types';
import { apiArtist } from 'src/types/api-types';

export default async function fetchDataThumbnails(searchTerm: string) {
	try {
		const response = await fetch(searchArtistApi(searchTerm));
		if (!response.ok) {
			throw new Error('Error fetching data from db');
		}
		const data = await response.json();

		const idList = data.search.data.artists.map((artist: apiArtist) => artist.id);
		const urlList = idList.map((id: string) => getArtistApi(id, 'images'));
		const imageResponse = await Promise.all(urlList.map((url: string) => fetch(url)));
		const imageData = await Promise.all(imageResponse.map((res) => res.json()));
		const imageList = imageData.map((img) =>
			img.meta.returnedCount === 0 ? null : img.images[1].url
		);

		const listArtists: ListArtists[] = data.search.data.artists.map(
			(artist: ListArtists, idx: number) => ({
				id: artist.id,
				name: artist.name,
				thumbnail: imageList[idx] || null,
			})
		);

		return listArtists;
	} catch (error: any) {
		return error.message;
	}
}
