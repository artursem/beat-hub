import { searchActions } from './search-slice';
import { AppDispatch } from './store';
import { uiActions } from './ui-slice';
// import FoundArtist from '../models/foundArtist';
import ListArtists from '../models/listArtists';
import { searchArtistApi, getImagesApi } from '../globals/api-endpoints';

export const fetchSearchArtist = (searchTerm: string) => {
	return async (dispatch: AppDispatch) => {
		dispatch(uiActions.showNotification('loading'));
		const fetchData = async (artist: string) => {
			const response = await fetch(
				`${searchArtistApi}${artist}&type=artist&per_type_limit=5`
			);
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
