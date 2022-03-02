import { searchActions } from './search-slice';
import { AppDispatch } from './store';
import { uiActions } from './ui-slice';
import FoundArtist from '../models/foundArtist';
import { getArtistApi, getGenericApi } from '../globals/api-endpoints';

export const fetchArtist = (id: string) => {
	return async (dispatch: AppDispatch) => {
		dispatch(uiActions.showNotification('loading'));
		const fetchData = async (id: string) => {
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

			if (imageData.images.length > 0) {
			}
			const image =
				imageData.images.length > 0 ? imageData.images[0].url : null;
			const thumbnail =
				imageData.images.length > 0 ? imageData.images[2].url : null;

			const genreHref = data.artists[0].links.genres.href;
			const genreResponse = await fetch(getGenericApi(genreHref));
			if (!genreResponse.ok) {
				throw new Error('Error fetching genres from db');
			}
			const genreData = await genreResponse.json();
			const genres =
				genreData.genres.map((g: any) => g.name).slice(0, 5) || null;

			let contemporaries = null;
			if (data.artists[0].links.contemporaries) {
				const contempoHref = data.artists[0].links.contemporaries.href;
				const contempoResponse = await fetch(getGenericApi(contempoHref));
				if (!contempoResponse.ok) {
					throw new Error('Error fetching contempos from db');
				}
				const contempoData = await contempoResponse.json();
				contemporaries = contempoData.artists
					.map((artist: any) => artist.id)
					.slice(0, 5);
			}

			const bio = data.artists[0].bios
				? data.artists[0].bios[0].bio
				: 'No bio available';

			const foundArtist: FoundArtist = {
				id,
				name: data.artists[0].name,
				bio,
				image,
				thumbnail,
				genres,
				contemporaries,
			};
			console.log(foundArtist);
			return foundArtist;
		};
		try {
			const foundArtist = await fetchData(id);
			dispatch(searchActions.setDisplayArtist(foundArtist));
			dispatch(searchActions.setSimilarId(foundArtist.contemporaries));
			dispatch(uiActions.showNotification('idle'));
		} catch (error) {
			console.log(error);
			dispatch(uiActions.showNotification('error'));
		}
	};
};
