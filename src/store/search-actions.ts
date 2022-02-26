import { searchActions } from './search-slice';
import { AppDispatch } from './store';
import { uiActions } from './ui-slice';
import FoundArtist from '../models/foundArtist';
import ListArtists from '../models/listArtists';
import {
	searchArtistApi,
	getArtistApi,
	getGenericApi,
} from '../globals/api-endpoints';

export const searchArtist = (searchTerm: string) => {
	return async (dispatch: AppDispatch) => {
		dispatch(uiActions.showNotification('loading'));
		const fetchData = async (artist: string) => {
			const response = await fetch(searchArtistApi(artist));
			if (!response.ok) {
				throw new Error('Error fetching data from db');
			}
			const data = await response.json();

			// TODO: replace map with reduce and fetch image/thumbnail for each artist

			// const listArtists: Array<ListArtists> = data.search.data.artists.reduce(
			// 	async (list: [], artist: ListArtists) => {
			// 		const thumbnailResponse = await fetch(getImagesApi(artist.id));
			// 		if (!response.ok) {
			// 			throw new Error('Error fetching thumbnail from db');
			// 		}
			// 		const thumbnailData = await thumbnailResponse.json();

			// 		// console.log(
			// 		// 	thumbnailData.images.length > 0
			// 		// 		? thumbnailData.images[2].url
			// 		// 		: 'no img'
			// 		// );

			// 		const thumbnailUrl =
			// 			thumbnailData.images.length > 0
			// 				? thumbnailData.images[2].url
			// 				: null;

			// 		const newArtist: ListArtists = {
			// 			id: artist.id,
			// 			name: artist.name,
			// 			thumbnail: thumbnailUrl,
			// 		};
			// 		return list;
			// 	},
			// 	[]
			// );
			// console.log(listArtists);

			const listArtists: Array<ListArtists> = data.search.data.artists.map(
				(artist: ListArtists) => ({
					id: artist.id,
					name: artist.name,
				})
			);

			return listArtists;
		};

		try {
			const listArtists = await fetchData(searchTerm);
			dispatch(uiActions.showNotification('idle'));
			dispatch(searchActions.setSearchResult(listArtists));
		} catch (error) {
			console.log(error);
			dispatch(uiActions.showNotification('error'));
		}
	};
};

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

			const genreHref = data.artists[0].links.genres.href;
			const genreResponse = await fetch(getGenericApi(genreHref));
			if (!genreResponse.ok) {
				throw new Error('Error fetching genres from db');
			}
			const genreData = await genreResponse.json();

			const contempoHref = data.artists[0].links.contemporaries.href;
			const contempoResponse = await fetch(getGenericApi(contempoHref));
			if (!contempoResponse.ok) {
				throw new Error('Error fetching contempos from db');
			}
			const contempoData = await contempoResponse.json();

			const bio = data.artists[0].bios[0].bio;
			const genres = genreData.genres.map((g: any) => g.name).slice(0, 5);
			const contemporaries = contempoData.artists
				.map((artist: any) => artist.name)
				.slice(0, 5);

			const foundArtist: FoundArtist = {
				id,
				name: data.artists[0].name,
				bio,
				image: imageData.images[0].url,
				thumbnail: imageData.images[2].url,
				genres,
				contemporaries,
			};
			return foundArtist;
		};
		try {
			const foundArtist = await fetchData(id);
			dispatch(searchActions.setDisplayArtist(foundArtist));
			dispatch(uiActions.showNotification('idle'));
		} catch (error) {
			console.log(error);
			dispatch(uiActions.showNotification('error'));
		}
	};
};
