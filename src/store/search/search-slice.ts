import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { RootState } from 'src/store/store';
import { ListArtists, Status } from 'src/types/app-types';
import fetchDataThumbnails from './fetchSearchThumbnail';

export interface searchState {
	searchResult: ListArtists[];
	showList: boolean;
	status: Status;
}

const initialState: searchState = {
	searchResult: [],
	showList: false,
	status: Status.idle,
};

export const fetchDataAndThumbnails = createAsyncThunk(
	'search/fetchDataAdnThumbnails',
	async (searchTerm: string) => {
		const response = fetchDataThumbnails(searchTerm);
		return response;
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
			.addCase(fetchDataAndThumbnails.pending, (state) => {
				state.status = Status.loading;
			})
			.addCase(fetchDataAndThumbnails.fulfilled, (state, action) => {
				state.status = Status.idle;
				state.searchResult = action.payload;
			});
	},
});

export const { setListIsOpen } = searchArtistSlice.actions;
export const selectSearchResult = (state: RootState) => state.search.searchResult;
export const selectSearchStatus = (state: RootState) => state.search.status;
export const selectListStatus = (state: RootState) => state.search.showList;
export default searchArtistSlice;
