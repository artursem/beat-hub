// import { useAppDispatch } from './hooks';
import { searchActions } from './search-slice';
import { AppDispatch } from './store';
import { uiActions } from './ui-slice';
import FoundArtist from '../models/foundArtist';

export const fetchSearchArtist = (searchTerm: string) => {
	return async (dispatch: AppDispatch) => {
		dispatch(uiActions.showNotification('loading'));
		const fetchData = async (artist: string) => {
			const response = await fetch(
				`https://theaudiodb.com/api/v1/json/2/search.php?s=${artist}`
			);
			if (!response.ok) {
				throw new Error('Error fetching data from db');
			}
			const data = await response.json();
			const {
				idArtist,
				strArtist,
				strArtistThumb,
				strBiographyEN,
				strGenre,
				strCountry,
			} = data.artists[0];

			const foundArtist: FoundArtist = {
				id: idArtist,
				name: strArtist,
				image: strArtistThumb,
				bio: strBiographyEN,
				bioShort: strBiographyEN
					.split(' ')
					.slice(0, 30)
					.concat('...')
					.join(' '),
				genre: strGenre,
				country: strCountry,
			};
			return foundArtist;
		};

		try {
			const foundArtist = await fetchData(searchTerm);
			dispatch(uiActions.showNotification('idle'));
			dispatch(searchActions.setSearchResult(foundArtist));
		} catch (error) {
			dispatch(uiActions.showNotification('error'));
		}
	};
};
