import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';

export interface appState {
	list: boolean;
}

const initialState: appState = {
	list: false,
};

export const uiSlice = createSlice({
	name: 'uiStatus',
	initialState,
	reducers: {
		setListIsOpen: (state, action) => {
			state.list = action.payload;
		},
	},
});

export const { setListIsOpen } = uiSlice.actions;
export const selectListStatus = (state: RootState) => state.uiStatus.list;
export default uiSlice;
