import { createAsyncThunk } from '@reduxjs/toolkit';
import { IAirport, IRoute } from '../../../typescript/entities';
import { apiProvider } from '../../../api/api';
import { IAirportListParams, IRouteListParams } from "../../../typescript/requests";
import { setActiveAirport } from "./airportsSlice";

export const defaultAirportsDataLength = 10;

export const getAirportList = createAsyncThunk<IAirport[], IAirportListParams>(
  'airports/getList',
  async ({ _limit, search }, { signal, rejectWithValue }) => {
    try {
      const response = await apiProvider.request<IAirport[]>({
        method: 'get',
        url: `/airports`,
        headers: {
          'Content-Type': 'application/json',
        },
        params: {
          _limit,
          search,
        },
        signal,
      });

      return response.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);

export const getAirportRouteList = createAsyncThunk<IRoute[], IRouteListParams>(
  'airports/getRouteList',
  async ({ _limit, airport_id }, { signal, rejectWithValue, dispatch }) => {
    try {
      const response = await apiProvider.request<IRoute[]>({
        method: 'get',
        url: `/routes`,
        headers: {
          'Content-Type': 'application/json',
        },
        params: {
          _limit,
          airport_id,
        },
        signal,
      });

      return response.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);