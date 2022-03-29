import { getTopAlbumsByArtist } from 'src/services/music-api';
import { apiAlbum } from 'src/types/api-types';

export default async function fetchAlbumList(id: string) {
	try {
		let albumsId = null;
		const albumsResponse = await fetch(getTopAlbumsByArtist(id));
		if (!albumsResponse.ok) {
			throw new Error('Error fetching albums from db');
		}
		const albumsData = await albumsResponse.json();
		if (albumsData.meta.totalCount > 0) {
			albumsId = albumsData.albums.map((album: apiAlbum) => album.id);
		}

		return albumsId;
	} catch (error: any) {
		throw new Error('Artist not found');
	}
}
