import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

import { searchArtistSlice } from './search-slice';
import { uiSlice } from './ui-slice';

export function makeStore() {
	return configureStore({
		reducer: { search: searchArtistSlice.reducer, uiStatus: uiSlice.reducer },
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
