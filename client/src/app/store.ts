import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import { spotifyApi } from '../features/api/apiSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    [spotifyApi.reducerPath]: spotifyApi.reducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(spotifyApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
