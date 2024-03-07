import { IAirportState } from '../../../typescript/states';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getAirportList, getAirportRouteList } from './airportsThunks';

const initialState: IAirportState = {
  data: null,
  activeAirport: null,
  routes: null,
  loading: 0,
  error: null,
};

export const airportsSlice = createSlice({
  name: 'airports',
  initialState,
  reducers: {
    setActiveAirport: (
      state,
      action: PayloadAction<IAirportState['activeAirport']>,
    ) => {
      state.activeAirport = action.payload;
    },
    clearRoutes: (state) => {
      state.routes = null;
    },
  },
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
      })

      .addCase(getAirportRouteList.pending, (state) => {
        state.error = null;
        state.loading++;
      })
      .addCase(getAirportRouteList.fulfilled, (state, { payload }) => {
        if (state.activeAirport) {
          state.routes = payload;
        }
        state.loading--;
      })
      .addCase(getAirportRouteList.rejected, (state) => {
        state.loading--;
      });
  },
});

export const { setActiveAirport, clearRoutes } = airportsSlice.actions;
