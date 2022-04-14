import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from 'src/store/store';
import { ListArtists, Status } from 'src/types/app-types';
import fetchTop from 'src/store/top-artists/fetchTop';

export interface TopArtistsState {
	topArtists: ListArtists[];
	status: Status;
}

const initialState: TopArtistsState = {
	topArtists: [],
	status: Status.idle,
};

export const fetchTopData = createAsyncThunk('topArtists/fetchTopData', async () => {
	const response = await fetchTop();
	return response;
});

export const topArtistsSlice = createSlice({
	name: 'topArtists',
	initialState,
	reducers: {
		setTopArtists: (state, action) => {
			state.topArtists = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchTopData.pending, (state) => {
				state.status = Status.loading;
			})
			.addCase(fetchTopData.fulfilled, (state, action) => {
				state.status = Status.idle;
				state.topArtists = action.payload;
			});
	},
});

export const setTopArtists = topArtistsSlice.actions.setTopArtists;
export const selectTop = (state: RootState) => state.topArtists.topArtists;
export const selectTopStatus = (state: RootState) => state.topArtists.status;
export default topArtistsSlice;
