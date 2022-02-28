import { searchActions } from './search-slice';
import { AppDispatch } from './store';
import { uiActions } from './ui-slice';
import { getArtistApi } from '../globals/api-endpoints';
import ListArtists from '../models/listArtists';

export const fetchSimilar = (list: string[]) => {
	return async (dispatch: AppDispatch) => {
		dispatch(uiActions.showNotification('loading'));
		const fetchDataAll = async (list: string[]) => {
			const urls = list.map((id) => getArtistApi(id));
			const response0 = await fetch(urls[0]);
			if (!response0.ok) {
				throw new Error('Error fetching artist from db');
			}
			const data0 = await response0.json();
			console.log(data0);

			const artist0: ListArtists = {
				id: data0.artists[0].id,
				name: data0.artists[0].name,
				thumbnail: 'thumbnail',
			};
			return [artist0, artist0, artist0];
		};

		try {
			const similarArtists = await fetchDataAll(list);
			dispatch(searchActions.setSimilarArtist(similarArtists));
			dispatch(uiActions.showNotification('idle'));
		} catch (error) {
			console.log(error);
			dispatch(uiActions.showNotification('error'));
		}
	};
};

// const fetchData = async (list: string[]) => {
// 	const urls = list.map((id) => getArtistApi(id));
// 	const response = await Promise.all(urls.map((url) => fetch(url)));
// 	const data = await Promise.all(response.map((res) => res.json()));

// 	data.forEach((artist) => console.log(artist));

// 	const dataList = data.map(() => {
// 		return { id: 'someId', name: 'someName', thumbnail: 'someUrl' };
// 	});
// 	console.log(dataList);
// 	return dataList;
// };

// const similarList = list.map(async (artist) => {
// 	const response = await fetch(getArtistApi(artist));
// 	if (!response.ok) {
// 		throw new Error('Error fetching similar artist from db');
// 	}
// 	const data = await response.json();

// 	const thumbnailResponse = await fetch(getArtistApi(artist, 'images'));
// 	if (!thumbnailResponse.ok) {
// 		throw new Error('Error fetching images from db');
// 	}
// 	const thumbnailData = await thumbnailResponse.json();

// 	const thumbnail =
// 		thumbnailData.images.length > 0 ? thumbnailData.images[2].url : null;

// 	return {
// 		id: data.artists[0].id,
// 		name: data.artists[0].name,
// 		thumbnail,
// 	};
// });
// console.log(similarList);
// return similarList;
