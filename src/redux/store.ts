import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import { airportsSlice } from './features/airports/airportsSlice';

export const store = configureStore({
  reducer: {
    airports: airportsSlice.reducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
