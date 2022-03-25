import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '../../store/store';
import ListArtists from '../../types/listArtists';
import fetchTop from '../../store/top-artists/fetchTop';
export interface TopArtistsState {
	topArtists: Array<ListArtists>;
	status: 'idle' | 'loading' | 'error';
}

const initialState: TopArtistsState = {
	topArtists: [],
	status: 'idle',
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
				state.status = 'loading';
			})
			.addCase(fetchTopData.fulfilled, (state, action) => {
				state.status = 'idle';
				state.topArtists = action.payload;
			});
	},
});

export const setTopArtists = topArtistsSlice.actions.setTopArtists;
export const selectTop = (state: RootState) => state.topArtists.topArtists;
export const selectTopStatus = (state: RootState) => state.topArtists.status;
export default topArtistsSlice;
