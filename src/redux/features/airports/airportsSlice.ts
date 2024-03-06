import { IAirportState } from '../../../typescript/states';
import { createSlice } from '@reduxjs/toolkit';
import { getAirportList } from './airportsThunks';

const initialState: IAirportState = {
  data: null,
  loading: 0,
  error: null,
};

export const airportsSlice = createSlice({
  name: 'airports',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAirportList.pending, (state) => {
        state.error = null;
        state.loading++;
      })
      .addCase(getAirportList.fulfilled, (state, { payload }) => {
        state.data = payload;
        state.loading--;
      })
      .addCase(getAirportList.rejected, (state) => {
        state.loading--;
      });
  },
});

export const {} = airportsSlice.actions;
