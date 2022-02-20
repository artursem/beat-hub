import { createSlice } from '@reduxjs/toolkit';

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

export default searchArtistSlice.reducer;
