import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from './store';

export interface appState {
	statusSearch: 'idle' | 'loading' | 'error';
	statusArtist: 'idle' | 'loading' | 'error';
	statusSimilar: 'idle' | 'loading' | 'error';
	list: boolean;
}

const initialState: appState = {
	statusSearch: 'idle',
	statusArtist: 'idle',
	statusSimilar: 'idle',
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
		// openSearchList: (state) => {
		// 	state.list = true;
		// },
		// closeSearchList: (state) => {
		// 	state.list = false;
		// },
	},
});

export const uiActions = uiSlice.actions;
// export const selectStatus = (state: RootState) => state.uiStatus.notification;
export default uiSlice;
