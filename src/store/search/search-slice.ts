import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { RootState } from 'src/store/store';
import { SearchArtist } from 'src/types/app-types';
import fetchSearchList from './fetchSearchList';
import fetchThumbnails from './fetchThumbnails';

export interface searchState {
	searchResult: SearchArtist[];
	searchImages: string[];
	showList: boolean;
	status: 'idle' | 'loading' | 'failed';
	statusImages: 'idle' | 'loading' | 'failed';
}

const initialState: searchState = {
	searchResult: [],
	searchImages: [],
	showList: false,
	status: 'idle',
	statusImages: 'idle',
};

export const fetchSearch = createAsyncThunk(
	'search/fetchSearch',
	async (searchTerm: string, { rejectWithValue }) => {
		try {
			const response = await fetchSearchList(searchTerm);
			return response;
		} catch (error) {
			return rejectWithValue('failed to search for artist');
		}
	}
);

export const fetchSearchImages = createAsyncThunk(
	'search/fetchSearchImages',
	async (list: string[]) => {
		const response = fetchThumbnails(list);
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
			.addCase(fetchSearch.pending, (state) => {
				state.status = 'loading';
			})
			.addCase(fetchSearch.rejected, (state) => {
				state.status = 'failed';
			})
			.addCase(fetchSearch.fulfilled, (state, action) => {
				state.status = 'idle';
				state.searchResult = action.payload;
			})
			.addCase(fetchSearchImages.pending, (state) => {
				state.statusImages = 'loading';
			})
			.addCase(fetchSearchImages.fulfilled, (state, action) => {
				state.statusImages = 'idle';
				state.searchImages = action.payload;
			});
	},
});

export const { setListIsOpen } = searchArtistSlice.actions;
export const selectSearchResult = (state: RootState) => state.search.searchResult;
export const selectSearchStatus = (state: RootState) => state.search.status;
export const selectSearchImages = (state: RootState) => state.search.searchImages;
export const selectSearchImagesStatus = (state: RootState) => state.search.statusImages;
export const selectListStatus = (state: RootState) => state.search.showList;
export default searchArtistSlice;
