import { searchActions } from './search-slice';
import { AppDispatch } from './store';
import { uiActions } from './ui-slice';
import { getAlbum } from '../globals/api-endpoints';

export const fetchAlbums = (list: string[]) => {
	return async (dispatch: AppDispatch) => {
		dispatch(uiActions.setStatusAlbums('loading'));

		const fetchDataAll = async (list: string[]) => {
			const urlList = list.map((id) => getAlbum(id));
			const albumResponse = await Promise.all(urlList.map((url) => fetch(url)));
			const albumData: any = await Promise.all(
				albumResponse.map((res) => res.json())
			);

			const urlListImages = list.map((id: string) => getAlbum(id, 'images'));

			const imageResponse = await Promise.all(
				urlListImages.map((url: string) => fetch(url))
			);
			const imageData = await Promise.all(
				imageResponse.map((res) => res.json())
			);
			const imageList = imageData.map((img) =>
				img.meta.returnedCount === 0 ? null : img.images[0].url
			);

			const albums = albumData.map((album: any, idx: number) => {
				return {
					id: album.albums[0].id,
					name: album.albums[0].name,
					artist: album.albums[0].artistName,
					thumbnail: imageList[idx],
				};
			});

			return albums;
		};

		try {
			const topAlbums = await fetchDataAll(list);
			dispatch(searchActions.setAlbumsDetails(topAlbums));
			dispatch(uiActions.setStatusAlbums('idle'));
		} catch (error) {
			console.log(error);
			dispatch(uiActions.setStatusAlbums('error'));
		}
	};
};
