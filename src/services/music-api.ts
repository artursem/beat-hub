const apiKey = process.env.NEXT_PUBLIC_API_KEY;
const address = 'https://api.napster.com/v2.2/';

export const searchArtistApi = (artist: string) => {
	return `${address}search?query=${artist}&type=artist&per_type_limit=5&apikey=${apiKey}`;
};

export const getArtistApi = (id: string, more?: string) => {
	if (more) {
		return `${address}artists/${id}/${more}?apikey=${apiKey}`;
	}
	return `${address}artists/${id}?apikey=${apiKey}`;
};

export const getGenericApi = (link: string) => {
	return `${link}?apikey=${apiKey}`;
};

export const getTopAlbumsByArtist = (id: string) => {
	return `${address}artists/${id}/albums/top?limit=5&apikey=${apiKey}`;
};

export const getAlbum = (id: string, more?: string) => {
	if (more) {
		return `${address}albums/${id}/${more}?apikey=${apiKey}`;
	}
	return `${address}albums/${id}?apikey=${apiKey}`;
};

export const getTopApi = () => {
	return `https://api.napster.com/v2.2/artists/top?limit=5&range=week&apikey=${apiKey}`;
};

export const getTopAlbumsApi = () => {
	return `${address}albums/top?limit=5&range=week&apikey=${apiKey}`;
};
