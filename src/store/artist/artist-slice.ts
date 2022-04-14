import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { RootState } from 'src/store/store';

import { Album, ListArtists, InitialArtist, Status } from 'src/types/app-types';

import fetchInitialArtist from './fetchInitialArtist';
import fetchAlbums from './fetchAlbums';
import fetchSimilar from './fetchSimilar';
import fetchGenres from './fetchGenres';
import fetchImage from './fetchImage';
import fetchAlbumList from './fetchAlbumList';
import fetchSimilarList from './fetchSimilarList';
import { Stat } from '@chakra-ui/react';

export interface ArtistState {
	initialArtist: InitialArtist;
	image: string | null;
	genres: string[] | null;
	similarDetails: Array<ListArtists> | null;
	albumsDetails: Array<Album> | null;
	status: Status;
	statusGenres: Status;
	statusImage: Status;
	statusAlbums: Status;
	statusSimilar: Status;
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
	status: Status.idle,
	statusGenres: Status.idle,
	statusImage: Status.idle,
	statusAlbums: Status.idle,
	statusSimilar: Status.idle,
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

export const fetchGenresData = createAsyncThunk('artist/fetchGenresData', async (link: string) => {
	const response = await fetchGenres(link);
	return response;
});

export const fetchImageData = createAsyncThunk('artist/fetchImageData', async (id: string) => {
	const response = await fetchImage(id);
	return response;
});

export const fetchAlbumsData = createAsyncThunk('artist/fetchAlbumData', async (id: string) => {
	const list = await fetchAlbumList(id);
	const albumsData = await fetchAlbums(list);
	return albumsData;
});

export const fetchSimilarData = createAsyncThunk('artist/fetchSimilarData', async (id: string) => {
	const list = await fetchSimilarList(id);
	const similarData = await fetchSimilar(list);
	return similarData;
});

export const artistSlice = createSlice({
	name: 'artist',
	initialState,
	reducers: {
		setInitialArtist: (state, action) => {
			state.initialArtist = action.payload;
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
				state.status = Status.loading;
				state.albumsDetails = [];
				state.similarDetails = [];
				state.image = null;
				state.genres = null;
				state.statusGenres = Status.loading;
				state.statusImage = Status.loading;
				state.statusAlbums = Status.loading;
				state.statusSimilar = Status.loading;
			})
			.addCase(fetchInitialData.fulfilled, (state, action) => {
				state.status = Status.idle;
				state.initialArtist = action.payload;
			})
			.addCase(fetchInitialData.rejected, (state) => {
				state.status = Status.failed;
			})
			.addCase(fetchGenresData.pending, (state) => {
				state.statusGenres = Status.loading;
			})
			.addCase(fetchGenresData.fulfilled, (state, action) => {
				state.statusGenres = Status.idle;
				state.genres = action.payload;
			})
			.addCase(fetchImageData.pending, (state) => {
				state.statusImage = Status.loading;
			})
			.addCase(fetchImageData.fulfilled, (state, action) => {
				state.statusImage = Status.idle;
				state.image = action.payload;
			})
			.addCase(fetchAlbumsData.pending, (state) => {
				state.statusAlbums = Status.loading;
			})
			.addCase(fetchAlbumsData.fulfilled, (state, action) => {
				state.statusAlbums = Status.idle;
				state.albumsDetails = action.payload;
			})
			.addCase(fetchSimilarData.pending, (state) => {
				state.statusSimilar = Status.loading;
			})
			.addCase(fetchSimilarData.fulfilled, (state, action) => {
				state.statusSimilar = Status.idle;
				state.similarDetails = action.payload;
			});
	},
});

export const artistActions = artistSlice.actions;
export const setInitialArtist = (payload: InitialArtist) => artistActions.setInitialArtist(payload);
export const selectArtist = (state: RootState) => state.artist.initialArtist;
export const selectArtistStatus = (state: RootState) => state.artist.status;
export const selectGenres = (state: RootState) => state.artist.genres;
export const selectImage = (state: RootState) => state.artist.image;
export const selectImageStatus = (state: RootState) => state.artist.statusImage;
export const selectAlbums = (state: RootState) => state.artist.albumsDetails;
export const selectAlbumsStatus = (state: RootState) => state.artist.statusAlbums;
export const selectSimilar = (state: RootState) => state.artist.similarDetails;
export const selectSimilarStatus = (state: RootState) => state.artist.statusSimilar;
export default artistSlice;
