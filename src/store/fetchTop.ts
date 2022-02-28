import { searchActions } from './search-slice';
import { AppDispatch } from './store';
import { uiActions } from './ui-slice';
import ListArtists from '../models/listArtists';
import { getTopApi } from '../globals/api-endpoints';

export const fetchTop = () => {
	return async (dispatch: AppDispatch) => {
		dispatch(uiActions.showNotification('loading'));

		const fetchData = async () => {
			const response = await fetch(getTopApi());
			if (!response.ok) {
				throw new Error('Error fetching data from db');
			}
			const data = await response.json();

			const topArtists: Array<ListArtists> = data.artists.map(
				(artist: ListArtists) => ({
					id: artist.id,
					name: artist.name,
				})
			);

			return topArtists;
		};

		try {
			const topArtists = await fetchData();
			dispatch(uiActions.showNotification('idle'));
			dispatch(searchActions.setTopArtists(topArtists));
		} catch (error) {
			console.log(error);
			dispatch(uiActions.showNotification('error'));
		}
	};
};
