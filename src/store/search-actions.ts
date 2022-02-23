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
				`${searchArtistApi}${artist}&type=artist&per_type_limit=10`
			);
			if (!response.ok) {
				throw new Error('Error fetching data from db');
			}
			const data = await response.json();
			console.log(data);

			// data.search.data.artists.forEach(async (artist: any) => {
			// 	const thumbnailResponse = await fetch(getImagesApi(artist.id));
			// 	if (!response.ok) {
			// 		throw new Error('Error fetching images');
			// 	}
			// 	const thumbnailData = await thumbnailResponse.json();
			// 	// console.log(thumbnailData);
			// 	if (thumbnailData.images.length > 0) {
			// 		return thumbnailData.images[2].url;
			// 	}
			// });

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
