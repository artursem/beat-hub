import { searchActions } from './search-slice';
import { AppDispatch } from './store';
import { uiActions } from './ui-slice';
// import FoundArtist from '../models/foundArtist';
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
			const listArtists: Array<ListArtists> = data.search.data.artists.map(
				// ANY!!!
				(artist: any) => ({
					id: artist.id,
					name: artist.name,
					image: artist.links.images.href,
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
