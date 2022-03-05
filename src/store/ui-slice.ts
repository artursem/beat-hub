import { createSlice } from '@reduxjs/toolkit';

export interface appState {
	statusSearch: 'idle' | 'loading' | 'error';
	statusArtist: 'idle' | 'loading' | 'error';
	statusSimilar: 'idle' | 'loading' | 'error';
	statusAlbums: 'idle' | 'loading' | 'error';
	statusLibrary: 'idle' | 'loading' | 'error';
	list: boolean;
}

const initialState: appState = {
	statusSearch: 'idle',
	statusArtist: 'idle',
	statusSimilar: 'idle',
	statusAlbums: 'idle',
	statusLibrary: 'idle',
	list: false,
};

export const uiSlice = createSlice({
	name: 'uiStatus',
	initialState,
	reducers: {
		setStatusArtist: (state, action) => {
			state.statusArtist = action.payload;
		},
		setStatusSearch: (state, action) => {
			state.statusSearch = action.payload;
		},
		setStatusSimilar: (state, action) => {
			state.statusSimilar = action.payload;
		},
		setStatusAlbums: (state, action) => {
			state.statusAlbums = action.payload;
		},
		setStatusLibrary: (state, action) => {
			state.statusAlbums = action.payload;
		},
		setListIsOpen: (state, action) => {
			state.list = action.payload;
		},
	},
});

export const uiActions = uiSlice.actions;
// export const selectStatus = (state: RootState) => state.uiStatus.notification;
export default uiSlice;
