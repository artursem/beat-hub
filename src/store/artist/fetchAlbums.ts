import { apiAlbumResponse } from 'src/types/api-types';
import { getAlbum } from '../../services/music-api';

export default async function fetchAlbums(list: string[]) {
	const urlList = list.map((id) => getAlbum(id));
	const albumResponse = await Promise.all(urlList.map((url) => fetch(url)));
	const albumData: any = await Promise.all(albumResponse.map((res) => res.json()));

	const urlListImages = list.map((id: string) => getAlbum(id, 'images'));

	const imageResponse = await Promise.all(urlListImages.map((url: string) => fetch(url)));
	const imageData = await Promise.all(imageResponse.map((res) => res.json()));
	const imageList = imageData.map((img) =>
		img.meta.returnedCount === 0 ? null : img.images[0].url
	);

	const albums = albumData.map((album: apiAlbumResponse, idx: number) => {
		return {
			id: album.albums[0].id,
			name: album.albums[0].name,
			artist: album.albums[0].artistName,
			// artistId: album.links.artists.ids[0],
			thumbnail: imageList[idx],
		};
	});
	return albums;
}
