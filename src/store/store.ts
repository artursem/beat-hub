import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import artistSlice from '../components/displayResults/artist-slice';
import librarySlice from '../components/library/library-slice';
import topArtistsSlice from '../components/topArtists/top-slice';
import topAlbumsSlice from '../components/topAlbums/top-albums-slice';
import searchArtistSlice from '../components/musicSearch/search-slice';

export function makeStore() {
	return configureStore({
		reducer: {
			search: searchArtistSlice.reducer,
			artist: artistSlice.reducer,
			topArtists: topArtistsSlice.reducer,
			topAlbums: topAlbumsSlice.reducer,
			library: librarySlice.reducer,
		},
	});
}

const store = makeStore();

export type AppState = ReturnType<typeof store.getState>;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	AppState,
	unknown,
	Action<string>
>;

export default store;
