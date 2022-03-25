import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { RootState } from '../../store/store';
import ListArtists from '../../types/listArtists';

import fetchSearchList from './fetchSearchList';

export interface searchState {
	searchResult: ListArtists[];
	showList: boolean;
	status: 'idle' | 'loading' | 'failed';
}

const initialState: searchState = {
	searchResult: [],
	showList: false,
	status: 'idle',
};

export const fetchSearch = createAsyncThunk(
	'search/fetchArtistData',
	async (searchTerm: string, { rejectWithValue }) => {
		try {
			const response = await fetchSearchList(searchTerm);
			return response;
		} catch (error) {
			return rejectWithValue('failed to search for artist');
		}
	}
);

export const searchArtistSlice = createSlice({
	name: 'search',
	initialState,
	reducers: {
		setListIsOpen: (state, action) => {
			state.showList = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchSearch.pending, (state) => {
				state.status = 'loading';
			})
			.addCase(fetchSearch.rejected, (state) => {
				state.status = 'failed';
			})
			.addCase(fetchSearch.fulfilled, (state, action) => {
				state.status = 'idle';
				state.searchResult = action.payload;
			});
	},
});

export const { setListIsOpen } = searchArtistSlice.actions;
export const selectSearchResult = (state: RootState) => state.search.searchResult;
export const selectSearchStatus = (state: RootState) => state.search.status;
export const selectListStatus = (state: RootState) => state.search.showList;
export default searchArtistSlice;
