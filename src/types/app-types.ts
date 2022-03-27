export type Album = {
	id: string;
	name: string;
	artist: string;
	artistId: string;
	thumbnail: string;
};

export type FoundArtist = {
	id: string;
	name: string;
	image: string;
	thumbnail: string;
	bio: string;
	genres: string[] | null;
	contemporaries: string[] | null;
	albumsId: string[] | null;
};

export type InitialArtist = {
	id: string;
	name: string;
	bio: string;
	genresLink: string | null;
	contemposLink: string | null;
};

export type ListArtists = {
	id: string;
	name: string;
	thumbnail?: string | null;
};

export type SearchArtist = {
	id: string;
	name: string;
};
