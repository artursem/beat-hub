import { searchActions } from './search-slice';
import { AppDispatch } from './store';
import { uiActions } from './ui-slice';
import ListArtists from '../models/listArtists';
import { getArtistApi, getTopApi } from '../globals/api-endpoints';

export const fetchTop = () => {
	return async (dispatch: AppDispatch) => {
		dispatch(uiActions.showNotification('loading'));

		const fetchData = async () => {
			const response = await fetch(getTopApi());
			if (!response.ok) {
				throw new Error('Error fetching data from db');
			}
			const data = await response.json();
			const idList = data.artists.map((artist: any) => artist.id);
			const urlList = idList.map((id: string) => getArtistApi(id, 'images'));

			const imageResponse = await Promise.all(
				urlList.map((url: string) => fetch(url))
			);
			const imageData = await Promise.all(
				imageResponse.map((res) => res.json())
			);
			const imageList = imageData.map((img) => img.images[0].url);

			const topArtists: Array<ListArtists> = data.artists.map(
				(artist: ListArtists, idx: number) => ({
					id: artist.id,
					name: artist.name,
					thumbnail: imageList[idx],
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
