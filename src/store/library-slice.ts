import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { RootState } from './store';
import ListArtists from '../models/listArtists';
import fetchLibArtists from './fetchLibrary';

export interface libraryState {
	listId: string[];
	artists: Array<ListArtists> | null;
	status: 'idle' | 'loading' | 'failed';
}

const initialState: libraryState = {
	listId: [],
	artists: null,
	status: 'idle',
};

export const fetchLibraryArtists = createAsyncThunk(
	'library/fetchArtists',
	async (list: string[]) => {
		const response = await fetchLibArtists(list);
		return response;
	}
);

export const librarySlice = createSlice({
	name: 'library',
	initialState,
	reducers: {
		setLibrary: (state) => {
			const localLibrary = localStorage.getItem('library');
			if (!localLibrary) return;
			state.listId = JSON.parse(localLibrary);
		},
		addArtist: (state, action) => {
			const newItem = action.payload;
			if (state.listId.indexOf(newItem) >= 0) return;

			state.listId.push(action.payload);
			localStorage.setItem('library', JSON.stringify(state.listId));
		},
		removeArtist: (state, action) => {
			const removeId = action.payload;
			state.listId = state.listId.filter((id) => id !== removeId);
			if (!state.artists) return;
			state.artists = state.artists.filter((artist) => artist.id !== removeId);
			localStorage.setItem('library', JSON.stringify(state.listId));
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchLibraryArtists.pending, (state) => {
				state.status = 'loading';
			})
			.addCase(fetchLibraryArtists.fulfilled, (state, action) => {
				state.status = 'idle';
				state.artists = action.payload;
			});
	},
});

export const { addArtist, removeArtist, setLibrary } = librarySlice.actions;
export const selectLibraryList = (state: RootState) => state.library.listId;
export const selectLibraryStatus = (state: RootState) => state.library.status;
export const selectLibraryArtists = (state: RootState) => state.library.artists;
export default librarySlice;
