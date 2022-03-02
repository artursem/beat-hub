import { searchActions } from './search-slice';
import { AppDispatch } from './store';
import { uiActions } from './ui-slice';
import { getArtistApi } from '../globals/api-endpoints';
import ListArtists from '../models/listArtists';

export const fetchSimilar = (list: string[]) => {
	return async (dispatch: AppDispatch) => {
		dispatch(uiActions.showNotification('loading'));

		const fetchDataAll = async (list: string[]) => {
			const urlList = list.map((id) => getArtistApi(id));
			const artistResponse = await Promise.all(
				urlList.map((url) => fetch(url))
			);
			const artistData = await Promise.all(
				artistResponse.map((res) => res.json())
			);
			// console.log(artistData);
			const similar = artistData.map((artist) => {
				return { name: artist.artists[0].name, id: artist.artists[0].id };
			});
			console.log(similar);
			return similar;
		};

		try {
			const similarArtists = await fetchDataAll(list);
			dispatch(searchActions.setSimilarDetails(similarArtists));
			dispatch(uiActions.showNotification('idle'));
		} catch (error) {
			console.log(error);
			dispatch(uiActions.showNotification('error'));
		}
	};
};
