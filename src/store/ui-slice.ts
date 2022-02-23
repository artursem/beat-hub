import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from './store';

export interface appState {
	notification: 'idle' | 'loading' | 'error';
	list: boolean;
}

const initialState: appState = {
	notification: 'idle',
	list: false,
};

export const uiSlice = createSlice({
	name: 'uiStatus',
	initialState,
	reducers: {
		showNotification: (state, action) => {
			state.notification = action.payload;
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
export const selectStatus = (state: RootState) => state.uiStatus.notification;
export default uiSlice;
