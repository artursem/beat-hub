import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import artistSlice from './artist/artist-slice';
import librarySlice from 'src/store/library/library-slice';
import topArtistsSlice from 'src/store/top-artists/top-slice';

import topAlbumsSlice from 'src/store/top-albums/top-albums-slice';
import searchArtistSlice from 'src/store/search/search-slice';

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
