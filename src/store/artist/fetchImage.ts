import { getArtistApi } from 'src/services/music-api';

export default async function fetchImage(id: string) {
	try {
		const imageResponse = await fetch(getArtistApi(id, 'images'));
		if (!imageResponse.ok) {
			throw new Error('Error fetching images from db');
		}
		const imageData = await imageResponse.json();
		let image = imageData.meta.returnedCount === 0 ? null : imageData.images[0].url;
		if (imageData.meta.returnedCount > 3) {
			image = imageData.images[3].url;
		}

		return image;
	} catch (error: any) {
		throw new Error('Image not found');
	}
}
