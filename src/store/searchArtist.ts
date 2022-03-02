import { searchActions } from './search-slice';
import { AppDispatch } from './store';
import { uiActions } from './ui-slice';
import ListArtists from '../models/listArtists';
import { searchArtistApi, getArtistApi } from '../globals/api-endpoints';

export const searchArtist = (searchTerm: string) => {
	return async (dispatch: AppDispatch) => {
		dispatch(uiActions.showNotification('loading'));
		const fetchData = async (artist: string) => {
			const response = await fetch(searchArtistApi(artist));
			if (!response.ok) {
				throw new Error('Error fetching data from db');
			}
			const data = await response.json();
			const idList = data.search.data.artists.map((artist: any) => artist.id);
			const urlList = idList.map((id: string) => getArtistApi(id, 'images'));
			console.log(urlList);
			const imageResponse = await Promise.all(
				urlList.map((url: string) => fetch(url))
			);
			const imageData = await Promise.all(
				imageResponse.map((res) => res.json())
			);
			console.log(imageData[0]);
			const imageList = imageData.map((img) =>
				img.meta.returnedCount === 0 ? null : img.images[1].url
			);

			const listArtists: Array<ListArtists> = data.search.data.artists.map(
				(artist: ListArtists, idx: number) => ({
					id: artist.id,
					name: artist.name,
					thumbnail: imageList[idx] || null,
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
