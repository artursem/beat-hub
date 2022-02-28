import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from './store';
import FoundArtist from '../models/foundArtist';
import ListArtists from '../models/listArtists';
export interface searchState {
	searchArtist: string;
	searchResult: ListArtists[];
	displayArtist: FoundArtist;
	similarArtist: ListArtists[];
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
		contemporaries: [],
	},
	similarArtist: [],
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
		setSimilarArtist: (state, action) => {
			state.similarArtist = action.payload;
		},
		setTopArtists: (state, action) => {
			state.topArtists = action.payload;
		},
	},
});

export const searchActions = searchArtistSlice.actions;
export const selectSearch = (state: RootState) => state.search.searchArtist;
export default searchArtistSlice.reducer;
