export const apiKey = 'MzQyZGE0YzktZDBlZC00MTk2LWIzNjctOTBlNjQ0OTcwNTA3';
// MOVE TO .ENV !!!!!!!!!!!!!!!!
export const searchArtistApi = `https://api.napster.com/v2.2/search?apikey=${apiKey}&query=`;

export const getImagesApi = (id: string) => {
	return `https://api.napster.com/v2.2/artists/${id}/images?apikey=${apiKey}`;
};
