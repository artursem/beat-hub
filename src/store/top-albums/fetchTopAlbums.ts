import { Album } from 'src/types/app-types';
import { getTopAlbumsApi, getAlbum } from 'src/services/music-api';

export default async function fetchTopAlbums() {
	try {
		const response = await fetch(getTopAlbumsApi());
		if (!response.ok) {
			throw new Error('Error fetching data from db');
		}
		const data = await response.json();

		const idList = data.albums.map((album: any) => album.id);
		const urlList = idList.map((id: string) => getAlbum(id, 'images'));

		const imageResponse = await Promise.all(urlList.map((url: string) => fetch(url)));
		const imageData = await Promise.all(imageResponse.map((res) => res.json()));
		const imageList = imageData.map((img) =>
			img.meta.returnedCount === 0 ? null : img.images[0].url
		);

		const topAlbums: Album[] = data.albums.map((album: any, idx: number) => ({
			id: album.id,
			name: album.name,
			artist: album.artistName,
			artistId: album.links.artists.ids[0],
			thumbnail: imageList[idx],
		}));
		return topAlbums;
	} catch (error) {
		throw new Error('Error fetching top albums');
	}
}
