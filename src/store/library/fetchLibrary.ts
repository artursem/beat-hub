import { getArtistApi } from 'src/services/music-api';
import { ListArtists } from 'src/types/app-types';

export default async function fetchLibArtists(listId: string[]): Promise<ListArtists[]> {
	try {
		const urlList = listId.map((id) => getArtistApi(id));
		const artistResponse = await Promise.all(urlList.map((url) => fetch(url)));
		const artistData = await Promise.all(artistResponse.map((res) => res.json()));

		const urlListImages = listId.map((id: string) => getArtistApi(id, 'images'));

		const imageResponse = await Promise.all(urlListImages.map((url: string) => fetch(url)));
		const imageData = await Promise.all(imageResponse.map((res) => res.json()));

		const imageList = imageData.map((img) =>
			img.meta.returnedCount === 0 ? null : img.images[0].url
		);

		const libraryList = artistData.map((artist, idx) => {
			return {
				name: artist.artists[0].name,
				id: artist.artists[0].id,
				thumbnail: imageList[idx],
			};
		});
		return libraryList;
	} catch (error) {
		throw new Error('Error fetching library');
	}
}
