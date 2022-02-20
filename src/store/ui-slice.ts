import { createSlice } from '@reduxjs/toolkit';

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
export default uiSlice;
