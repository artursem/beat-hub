import { searchActions } from './search-slice';
import { AppDispatch } from './store';
import { uiActions } from './ui-slice';
import FoundArtist from '../models/foundArtist';
import ListArtists from '../models/listArtists';
import { searchArtistApi } from '../globals/api-endpoints';

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

			const id = data.search.data.artists;
			const name = data.search.data.artists.name;
			const image = data.search.data.artists.links.images.href;

			const listArtists: ListArtists[] = data.search.data.artists.map(() => ({
				id,
				name,
				image,
			}));
			console.log(listArtists);
			return listArtists;
		};

		try {
			const listArtists = await fetchData(searchTerm);
			dispatch(uiActions.showNotification('idle'));
			dispatch(searchActions.setSearchResult(listArtists));
		} catch (error) {
			dispatch(uiActions.showNotification('error'));
		}
	};
};
