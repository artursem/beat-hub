import { getArtistApi } from 'src/services/music-api';

export default async function fetchThumbnails(list: string[]) {
	try {
		const urlList = list.map((id: string) => getArtistApi(id, 'images'));
		const imageResponse = await Promise.all(urlList.map((url: string) => fetch(url)));
		const imageData = await Promise.all(imageResponse.map((res) => res.json()));
		const imageList: string[] = imageData.map((img) =>
			img.meta.returnedCount === 0 ? null : img.images[1].url
		);

		return imageList;
	} catch (error: any) {
		throw new Error('Image not found');
	}
}
