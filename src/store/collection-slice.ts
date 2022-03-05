import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from './store';

export interface collectionState {
	collectionId: string[];
}

const initialState: collectionState = {
	collectionId: [],
};

export const collectionSlice = createSlice({
	name: 'collection',
	initialState,
	reducers: {
		addArtist: (state, action) => {
			const newItem = action.payload;
			if (state.collectionId.indexOf(newItem) > 0) return;
			state.collectionId.push(action.payload);
		},
		// remove, set, get
	},
});

export const collectionActions = collectionSlice.actions;
export const selectCollection = (state: RootState) =>
	state.collection.collectionId;
export default collectionSlice;
