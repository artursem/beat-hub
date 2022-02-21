import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from './store';
import FoundArtist from '../models/foundArtist';
export interface searchState {
	searchArtist: string;
	searchResult: FoundArtist;
}

const initialState: searchState = {
	searchArtist: '',
	searchResult: {
		id: '',
		name: '',
		image: '',
		bio: '',
		genre: '',
		country: '',
	},
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
	},
});

export const searchActions = searchArtistSlice.actions;
export const selectSearch = (state: RootState) => state.search.searchArtist;
export default searchArtistSlice.reducer;
