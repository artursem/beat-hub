import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from './store';

export interface appState {
	notification: 'idle' | 'loading' | 'error';
}

const initialState: appState = {
	notification: 'idle',
};

export const uiSlice = createSlice({
	name: 'uiStatus',
	initialState,
	reducers: {
		showNotification: (state, action) => {
			state.notification = action.payload;
		},
	},
});

export const uiActions = uiSlice.actions;
export const selectStatus = (state: RootState) => state.uiStatus.notification;
export default uiSlice;
