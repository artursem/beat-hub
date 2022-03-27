import { FoundArtist } from 'src/types/app-types';
import { getArtistApi, getGenericApi, getTopAlbumsByArtist } from 'src/services/music-api';

export default async function fetchArtist(id: string) {
	try {
		const response = await fetch(getArtistApi(id));
		if (!response.ok) {
			throw new Error('Error fetching artist from db');
		}
		const data = await response.json();

		const imageResponse = await fetch(getArtistApi(id, 'images'));
		if (!imageResponse.ok) {
			throw new Error('Error fetching images from db');
		}
		const imageData = await imageResponse.json();
		let image = imageData.meta.returnedCount === 0 ? null : imageData.images[0].url;
		if (imageData.meta.returnedCount > 3) {
			image = imageData.images[3].url;
		}
		const thumbnail = imageData.meta.returnedCount === 0 ? null : imageData.images[1].url;

		const genreHref = data.artists[0].links.genres.href;
		const genreResponse = await fetch(getGenericApi(genreHref));
		if (!genreResponse.ok) {
			throw new Error('Error fetching genres from db');
		}
		const genreData = await genreResponse.json();
		const genres = genreData.genres.map((g: any) => g.name).slice(0, 5) || null;

		let contemporaries = null;
		if (data.artists[0].links.contemporaries) {
			const contempoHref = data.artists[0].links.contemporaries.href;
			const contempoResponse = await fetch(getGenericApi(contempoHref));
			if (!contempoResponse.ok) {
				throw new Error('Error fetching contempos from db');
			}
			const contempoData = await contempoResponse.json();
			contemporaries = contempoData.artists.map((artist: any) => artist.id).slice(0, 6);
		}

		const bio = data.artists[0].bios ? data.artists[0].bios[0].bio : 'No bio available';

		let albumsId = null;
		const albumsResponse = await fetch(getTopAlbumsByArtist(id));
		if (!albumsResponse.ok) {
			throw new Error('Error fetching albums from db');
		}
		const albumsData = await albumsResponse.json();
		if (albumsData.meta.totalCount > 0) {
			albumsId = albumsData.albums.map((album: any) => album.id);
		}

		const foundArtist: FoundArtist = {
			id,
			name: data.artists[0].name,
			bio,
			image,
			thumbnail,
			genres,
			contemporaries,
			albumsId,
		};

		return foundArtist;
	} catch (error: any) {
		throw new Error('Artist not found');
	}
}
