import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '../../store/store';
import Album from '../../models/albums';
import fetchTopAlbums from './fetchTopAlbums';

export interface TopAlbumsState {
	topAlbums: Array<Album>;
	status: 'idle' | 'loading' | 'error';
}

const initialState: TopAlbumsState = {
	topAlbums: [],
	status: 'idle',
};

export const fetchTopAlbumsData = createAsyncThunk('topAlbums/fetchTopData', async () => {
	const response = await fetchTopAlbums();
	return response;
});

export const topAlbumsSlice = createSlice({
	name: 'topAlbums',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchTopAlbumsData.pending, (state) => {
				state.status = 'loading';
			})
			.addCase(fetchTopAlbumsData.fulfilled, (state, action) => {
				state.status = 'idle';
				state.topAlbums = action.payload;
			});
	},
});

export const selectTopAlbums = (state: RootState) => state.topAlbums.topAlbums;
export const selectTopAlbumsStatus = (state: RootState) => state.topAlbums.status;
export default topAlbumsSlice;