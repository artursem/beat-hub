import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from './store';

export interface searchState {
	searchArtist: string;
}

const initialState: searchState = {
	searchArtist: '',
};

export const searchArtistSlice = createSlice({
	name: 'search',
	initialState,
	reducers: {
		setSearch: (state, action) => {
			state.searchArtist = action.payload;
		},
	},
});

export const searchActions = searchArtistSlice.actions;
export const selectSearch = (state: RootState) => state.search.searchArtist;
export default searchArtistSlice.reducer;
