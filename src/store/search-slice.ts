import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from './store';
import FoundArtist from '../models/foundArtist';
import ListArtists from '../models/listArtists';
export interface searchState {
	searchArtist: string;
	searchResult: ListArtists[];
	displayArtist: FoundArtist;
	similarId: string[];
	similarDetails: Array<ListArtists> | null;
	albumsId: string[] | null;
	topArtists: Array<ListArtists>;
}

// WTF?!
const initialState: searchState = {
	searchArtist: '',
	searchResult: [],
	displayArtist: {
		id: '',
		name: '',
		image: '',
		thumbnail: '',
		bio: '',
		genres: [],
		contemporaries: null,
		albumsId: null,
	},
	similarId: [],
	similarDetails: [],
	albumsId: null,
	topArtists: [],
};

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
	},
});

export const searchActions = searchArtistSlice.actions;
export const selectSearch = (state: RootState) => state.search.searchArtist;
export default searchArtistSlice.reducer;
