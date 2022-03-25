type FoundArtist = {
	id: string;
	name: string;
	image: string;
	thumbnail: string;
	bio: string;
	genres: string[] | null;
	contemporaries: string[] | null;
	albumsId: string[] | null;
};

export default FoundArtist;
