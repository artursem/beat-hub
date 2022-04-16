export interface apiArtist {
	type: string;
	id: string;
	href: string;
	name: string;
	shortcut: string;
	amg: string;
	blurbs: string[];
	bios: string[];
	albumGroups: {
		others: string[];
		singlesAndEPs: string[];
		compilations: string[];
		main: string[];
	};
	links: {
		albums: {
			href: string;
		};
		images: {
			href: string;
		};
		posts: {
			href: string;
		};
		topTracks: {
			href: string;
		};
		genres: {
			ids: string[];
			href: string;
		};
		stations: {
			ids: string[];
			href: string;
		};
		contemporaries: {
			ids: string[];
			href: string;
		};
		followers: {
			ids: string[];
			href: string;
		};
		influences: {
			ids: string[];
			href: string;
		};
		relatedProjects: {
			ids: string[];
			href: string;
		};
	};
}

export interface apiAlbum {
	type: string;
	id: string;
	upc: string;
	shortcut: string;
	amg: string;
	href: string;
	name: string;
	released: string;
	originallyReleased: string;
	label: string;
	copyright: string;
	tags: string[] | [];
	discCount: number;
	trackCount: number;
	isExplicit: boolean;
	isSingle: boolean;
	accountPartner: string;
	artistName: string;
	isAvailableInHiRes: boolean;
	isAvailableInAtmos: boolean;
	contributingArtists: {
		primaryArtist: string;
	};
	discographies: {
		main: string[];
	};
	links: {
		images: {
			href: string;
		};
		tracks: {
			href: string;
		};
		posts: {
			href: string;
		};
		artists: {
			ids: string[];
			href: string;
		};
		genres: {
			ids: string[];
			href: string;
		};
		reviews: {
			ids: string[];
			href: string;
		};
	};
	isStreamable: true;
}

export interface apiAlbumResponse {
	meta: {
		returnedCount: number;
		totalCount: null | number;
	};
	albums: apiAlbum[];
}

export interface apiImage {
	type: string;
	id: string;
	url: string;
	contentId: string;
	width: number;
	height: number;
	isDefault: boolean;
	version: number;
	imageType: string;
}

export interface apiGenre {
	type: string;
	id: string;
	name: string;
	href: string;
	shortcut: string;
	description: string;
	links: {
		parentGenres: {
			ids: string[];
			href: string;
		};
	};
}

export interface apiSearch {
	type: string;
	id: string;
	href: string;
	name: string;
	shortcut: string;
	amg: string;
	blurbs: string[];
	bios: [
		{
			title: string;
			author: string;
			publishDate: string;
			bio: string;
		}
	];
	albumGroups: {
		others: string[];
		singlesAndEPs: string[];
		main: string[];
		compilations: string[];
	};
	links: {
		albums: {
			href: string;
		};
		images: {
			href: string;
		};
		posts: {
			href: string;
		};
		topTracks: {
			href: string;
		};
		genres: {
			ids: string[];
			href: string;
		};
		stations: {
			ids: string[];
			href: string;
		};
		contemporaries: {
			ids: string[];
			href: string;
		};
		followers: {
			ids: string[];
			href: string;
		};
		influences: {
			ids: string[];
			href: string;
		};
		relatedProjects: {
			ids: string[];
			href: string;
		};
	};
}
