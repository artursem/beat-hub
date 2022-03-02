import { searchActions } from './search-slice';
import { AppDispatch } from './store';
import { uiActions } from './ui-slice';
import { getArtistApi } from '../globals/api-endpoints';

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

			const urlListImages = list.map((id: string) =>
				getArtistApi(id, 'images')
			);

			const imageResponse = await Promise.all(
				urlListImages.map((url: string) => fetch(url))
			);
			const imageData = await Promise.all(
				imageResponse.map((res) => res.json())
			);

			const imageList = imageData.map((img) =>
				img.meta.returnedCount === 0 ? null : img.images[0].url
			);

			const similar = artistData.map((artist, idx) => {
				return {
					name: artist.artists[0].name,
					id: artist.artists[0].id,
					thumbnail: imageList[idx],
				};
			});

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
