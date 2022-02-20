import { createSlice } from '@reduxjs/toolkit';
import type { AppState, AppThunk } from './store';

export interface ArtistState {
	artistId: number | null;
	status: 'idle' | 'loading' | 'failed';
}

const initialState: ArtistState = {
	artistId: null,
	status: 'idle',
};

export const artistSlice = createSlice({
	name: 'artist',
	initialState,
	reducers: {
		setArtist: (state, action) => {
			state.artistId = action.payload;
		},
	},
});

export const artistActions = artistSlice.actions;

export default artistSlice.reducer;
