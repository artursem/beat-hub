import { ListArtists } from 'src/types/app-types';
import { getArtistApi, getTopApi } from 'src/services/music-api';

export default async function fetchTop() {
	try {
		const response = await fetch(getTopApi());
		if (!response.ok) {
			throw new Error('Error fetching data from db');
		}
		const data = await response.json();

		const idList = data.artists.map((artist: any) => artist.id);
		const urlList = idList.map((id: string) => getArtistApi(id, 'images'));

		const imageResponse = await Promise.all(urlList.map((url: string) => fetch(url)));
		const imageData = await Promise.all(imageResponse.map((res) => res.json()));
		const imageList = imageData.map((img) =>
			img.meta.returnedCount === 0 ? null : img.images[0].url
		);

		const topArtists: ListArtists[] = data.artists.map((artist: ListArtists, idx: number) => ({
			id: artist.id,
			name: artist.name,
			thumbnail: imageList[idx],
		}));
		return topArtists;
	} catch (error) {
		throw new Error('Error fetching top albums');
	}
}
