import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { RootState } from 'src/store/store';

import { Album, ListArtists, FoundArtist, InitialArtist } from 'src/types/app-types';

import fetchInitialArtist from './fetchInitialArtist';
import fetchArtist from './fetchArtist';
import fetchAlbums from './fetchAlbums';
import fetchSimilar from './fetchSimilar';

export interface ArtistState {
	// displayArtist: FoundArtist;
	initialArtist: InitialArtist;
	image: string | null;
	genres: string[] | null;
	similarDetails: Array<ListArtists> | null;
	albumsDetails: Array<Album> | null;
	status: 'idle' | 'loading' | 'failed';
	statusAlbums: 'idle' | 'loading' | 'failed';
	statusSimilar: 'idle' | 'loading' | 'failed';
}

const initialState: ArtistState = {
	initialArtist: {
		id: '',
		name: '',
		bio: '',
		contemposLink: null,
		genresLink: null,
	},
	image: null,
	genres: null,
	similarDetails: [],
	albumsDetails: [],
	status: 'idle',
	statusAlbums: 'idle',
	statusSimilar: 'idle',
};

export const fetchInitialData = createAsyncThunk(
	'artist/fetchInitialData',
	async (id: string, { rejectWithValue }) => {
		try {
			const response = await fetchInitialArtist(id);
			return response;
		} catch (err) {
			return rejectWithValue('failed init artist fetching');
		}
	}
);
// export const fetchArtistData = createAsyncThunk(
// 	'artist/fetchArtistData',
// 	async (id: string, { rejectWithValue }) => {
// 		try {
// 			const response = await fetchArtist(id);
// 			return response;
// 		} catch (err) {
// 			return rejectWithValue('failed artist fetching');
// 		}
// 	}
// );

export const fetchAlbumsData = createAsyncThunk('artist/fetchAlbumData', async (list: string[]) => {
	const response = await fetchAlbums(list);
	return response;
});

export const fetchSimilarData = createAsyncThunk(
	'artist/fetchSimilarData',
	async (list: string[]) => {
		const response = await fetchSimilar(list);
		return response;
	}
);

export const artistSlice = createSlice({
	name: 'artist',
	initialState,
	reducers: {
		setInitialArtist: (state, action) => {
			state.initialArtist = action.payload;
		},
		setGenres: (state, action) => {
			state.genres = action.payload;
		},
		setSimilarDetails: (state, action) => {
			state.similarDetails = action.payload;
		},
		setAlbumsDetails: (state, action) => {
			state.albumsDetails = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchInitialData.pending, (state) => {
				state.status = 'loading';
				state.albumsDetails = [];
				state.similarDetails = [];
			})
			.addCase(fetchInitialData.fulfilled, (state, action) => {
				state.status = 'idle';
				state.initialArtist = action.payload;
			})
			.addCase(fetchInitialData.rejected, (state) => {
				state.status = 'failed';
			})
			.addCase(fetchAlbumsData.pending, (state) => {
				state.statusAlbums = 'loading';
			})
			.addCase(fetchAlbumsData.fulfilled, (state, action) => {
				state.statusAlbums = 'idle';
				state.albumsDetails = action.payload;
			})
			.addCase(fetchSimilarData.pending, (state) => {
				state.statusSimilar = 'loading';
			})
			.addCase(fetchSimilarData.fulfilled, (state, action) => {
				state.statusSimilar = 'idle';
				state.similarDetails = action.payload;
			});
	},
});

export const artistActions = artistSlice.actions;
export const setInitialArtist = (payload: InitialArtist) => artistActions.setInitialArtist(payload);
export const selectArtist = (state: RootState) => state.artist.initialArtist;
export const selectArtistStatus = (state: RootState) => state.artist.status;

export const setGenres = (payload: string[]) => artistActions.setGenres(payload);
export const selectGenres = (state: RootState) => state.artist.genres;

export const selectAlbums = (state: RootState) => state.artist.albumsDetails;
export const selectAlbumsStatus = (state: RootState) => state.artist.statusAlbums;
export const selectSimilar = (state: RootState) => state.artist.similarDetails;
export const selectSimilarStatus = (state: RootState) => state.artist.statusSimilar;
export default artistSlice;
