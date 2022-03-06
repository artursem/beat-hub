import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { RootState } from './store';

import FoundArtist from '../models/foundArtist';
import ListArtists from '../models/listArtists';
import Album from '../models/albums';

import fetchArtist from './fetchArtist';
import fetchAlbums from './fetchAlbums';
import fetchSimilar from './fetchSimilar';

export interface ArtistState {
	displayArtist: FoundArtist;
	similarDetails: Array<ListArtists> | null;
	albumsDetails: Array<Album> | null;
	status: 'idle' | 'loading' | 'failed';
	statusAlbums: 'idle' | 'loading' | 'failed';
	statusSimilar: 'idle' | 'loading' | 'failed';
}

const initialState: ArtistState = {
	displayArtist: {
		id: '',
		name: '',
		albumsId: [],
		bio: '',
		contemporaries: [],
		genres: [],
		image: '',
		thumbnail: '',
	},
	similarDetails: [],
	albumsDetails: [],
	status: 'idle',
	statusAlbums: 'idle',
	statusSimilar: 'idle',
};

export const fetchArtistData = createAsyncThunk('artist/fetchArtistData', async (id: string) => {
	const response = await fetchArtist(id);
	return response;
});

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
		setDisplayArtist: (state, action) => {
			state.displayArtist = action.payload;
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
			.addCase(fetchArtistData.pending, (state) => {
				state.status = 'loading';
			})
			.addCase(fetchArtistData.fulfilled, (state, action) => {
				state.status = 'idle';
				state.displayArtist = action.payload;
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
export const selectArtist = (state: RootState) => state.artist.displayArtist;
export const selectArtistStatus = (state: RootState) => state.artist.status;
export const selectAlbums = (state: RootState) => state.artist.albumsDetails;
export const selectAlbumsStatus = (state: RootState) => state.artist.statusAlbums;
export const selectSimilar = (state: RootState) => state.artist.similarDetails;
export const selectSimilarStatus = (state: RootState) => state.artist.statusSimilar;
export default artistSlice;
