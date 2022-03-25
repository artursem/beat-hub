import ListArtists from '../../types/listArtists';
import { searchArtistApi, getArtistApi } from '../../services/music-api';

export default async function fetchSearchList(searchTerm: string) {
	try {
		const response = await fetch(searchArtistApi(searchTerm));
		if (!response.ok) {
			throw new Error('Error fetching data from db');
		}
		const data = await response.json();

		const idList = data.search.data.artists.map((artist: any) => artist.id);
		const urlList = idList.map((id: string) => getArtistApi(id, 'images'));
		const imageResponse = await Promise.all(urlList.map((url: string) => fetch(url)));
		const imageData = await Promise.all(imageResponse.map((res) => res.json()));
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
	} catch (error: any) {
		return error.message;
	}
}

// export default async function fetchSearchList(searchTerm: string) {
// 	fetch(searchArtistApi(searchTerm))
// 		.then((response) => {
// 			if (response.ok) {
// 				return response.json();
// 			}
// 			throw new Error('Error fetching data from db');
// 		})
// 		.then((data) => {
// 			const idList = data.search.data.artists.map((artist: any) => artist.id);
// 			const urlList = idList.map((id: string) => getArtistApi(id, 'images'));
// 			const imageResponse: Promise<string[]> = Promise.all(
// 				urlList.map((url: string) => fetch(url))
// 			);
// 			const imageData: Promise<string[]> = Promise.all(imageResponse.map((res) => res.json()));
// 			const imageList: string[] = imageData.map((img) =>
// 				img.meta.returnedCount === 0 ? null : img.images[1].url
// 			);

// 			const listArtists: Array<ListArtists> = data.search.data.artists.map(
// 				(artist: ListArtists, idx: number) => ({
// 					id: artist.id,
// 					name: artist.name,
// 					thumbnail: imageList[idx] || null,
// 				})
// 			);

// 			return listArtists;
// 		});
// }
