import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from './store';
import ListArtists from '../models/listArtists';

export interface libraryState {
	libraryId: string[];
	libraryArtists: Array<ListArtists> | null;
}

const initialState: libraryState = {
	libraryId: [],
	libraryArtists: null,
};

export const librarySlice = createSlice({
	name: 'library',
	initialState,
	reducers: {
		setLibraryDetails: (state, action) => {
			state.libraryArtists = action.payload;
		},
		addArtist: (state, action) => {
			const newItem = action.payload;
			if (state.libraryId.indexOf(newItem) >= 0) return;

			state.libraryId.push(action.payload);
		},
		// remove, set, get, isInLibrary
	},
});

export const libraryActions = librarySlice.actions;
export const selectLibrary = (state: RootState) => state.library.libraryId;
export default librarySlice;
