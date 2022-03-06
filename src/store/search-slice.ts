import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { RootState } from './store';
import FoundArtist from '../models/foundArtist';
import ListArtists from '../models/listArtists';
import Album from '../models/albums';

import fetchArtist from './fetchArtist';
import fetchAlbums from './fetchAlbums';

export interface searchState {
	searchArtist: string;
	searchResult: ListArtists[];
	displayArtist: FoundArtist;
	similarId: string[];
	similarDetails: Array<ListArtists> | null;
	albumsId: string[] | null;
	albumsDetails: Array<Album> | null;
	topArtists: Array<ListArtists>;
	status: 'idle' | 'loading' | 'failed';
	statusAlbums: 'idle' | 'loading' | 'failed';
	statusSimilar: 'idle' | 'loading' | 'failed';
}

const initialState: searchState = {
	searchArtist: '',
	searchResult: [],
	displayArtist: {
		id: '',
		name: '',
		albumsId: [],
		bio: '',
		contemporaries: [],
		genres: [],
		image: '',
		thumbnail: '',
	},
	similarId: [],
	similarDetails: [],
	albumsId: null,
	albumsDetails: [],
	topArtists: [],
	status: 'idle',
	statusAlbums: 'idle',
	statusSimilar: 'idle',
};

export const fetchArtistData = createAsyncThunk(
	'search/fetchArtistData',
	async (id: string) => {
		const response = await fetchArtist(id);
		return response;
	}
);

export const fetchAlbumsData = createAsyncThunk(
	'search/fetchAlbumData',
	async (list: string[]) => {
		const response = await fetchAlbums(list);
		return response;
	}
);

export const searchArtistSlice = createSlice({
	name: 'search',
	initialState,
	reducers: {
		setSearch: (state, action) => {
			state.searchArtist = action.payload;
		},
		setSearchResult: (state, action) => {
			state.searchResult = action.payload;
		},
		setDisplayArtist: (state, action) => {
			state.displayArtist = action.payload;
		},
		setSimilarId: (state, action) => {
			state.similarId = action.payload;
		},
		setSimilarDetails: (state, action) => {
			state.similarDetails = action.payload;
		},
		setTopArtists: (state, action) => {
			state.topArtists = action.payload;
		},
		setAlbumsId: (state, action) => {
			state.albumsId = action.payload;
		},
		setAlbumsDetails: (state, action) => {
			state.albumsDetails = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchArtistData.pending, (state) => {
				state.status = 'loading';
			})
			.addCase(fetchArtistData.fulfilled, (state, action) => {
				state.status = 'idle';
				state.displayArtist = action.payload;
			})
			.addCase(fetchAlbumsData.pending, (state) => {
				state.statusAlbums = 'loading';
			})
			.addCase(fetchAlbumsData.fulfilled, (state, action) => {
				state.statusAlbums = 'idle';
				state.albumsDetails = action.payload;
			});
	},
});

export const searchActions = searchArtistSlice.actions;
export const selectSearch = (state: RootState) => state.search.searchArtist;
export const selectArtist = (state: RootState) => state.search.displayArtist;
export const selectArtistStatus = (state: RootState) => state.search.status;
export const selectAlbums = (state: RootState) => state.search.albumsDetails;
export const selectAlbumsStatus = (state: RootState) =>
	state.search.statusAlbums;
export default searchArtistSlice;
