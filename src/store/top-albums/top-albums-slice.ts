import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from 'src/store/store';
import { Album, Status } from 'src/types/app-types';
import fetchTopAlbums from './fetchTopAlbums';

export interface TopAlbumsState {
	topAlbums: Album[];
	status: Status;
}

const initialState: TopAlbumsState = {
	topAlbums: [],
	status: Status.idle,
};

export const fetchTopAlbumsData = createAsyncThunk('topAlbums/fetchTopData', async () => {
	const response = await fetchTopAlbums();
	return response;
});

export const topAlbumsSlice = createSlice({
	name: 'topAlbums',
	initialState,
	reducers: {
		setTopAlbums: (state, action) => {
			state.topAlbums = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchTopAlbumsData.pending, (state) => {
				state.status = Status.loading;
			})
			.addCase(fetchTopAlbumsData.fulfilled, (state, action) => {
				state.status = Status.idle;
				state.topAlbums = action.payload;
			});
	},
});

export const setTopAlbums = topAlbumsSlice.actions.setTopAlbums;
export const selectTopAlbums = (state: RootState) => state.topAlbums.topAlbums;
export const selectTopAlbumsStatus = (state: RootState) => state.topAlbums.status;
export default topAlbumsSlice;
