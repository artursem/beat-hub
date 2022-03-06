import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { RootState } from './store';
import ListArtists from '../models/listArtists';

import fetchSearchList from './fetchSearchList';

export interface searchState {
	searchResult: ListArtists[];
	status: 'idle' | 'loading' | 'failed';
}

const initialState: searchState = {
	searchResult: [],
	status: 'idle',
};

export const fetchSearch = createAsyncThunk(
	'search/fetchArtistData',
	async (searchTerm: string) => {
		const response = await fetchSearchList(searchTerm);
		return response;
	}
);

export const searchArtistSlice = createSlice({
	name: 'search',
	initialState,
	reducers: {
		setSearchResult: (state, action) => {
			state.searchResult = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchSearch.pending, (state) => {
				state.status = 'loading';
			})
			.addCase(fetchSearch.fulfilled, (state, action) => {
				state.status = 'idle';
				state.searchResult = action.payload;
			});
	},
});

export const searchActions = searchArtistSlice.actions;
export const selectSearchResult = (state: RootState) => state.search.searchResult;
export const selectSearchStatus = (state: RootState) => state.search.status;
export default searchArtistSlice;
