import { createAsyncThunk } from '@reduxjs/toolkit';
import { IAirport } from '../../../typescript/entities';
import { apiProvider } from '../../../api/api';

export const defaultListLength = 12;

export const getAirportList = createAsyncThunk<IAirport[], undefined>(
  'airports/getList',
  async (_, { rejectWithValue }) => {
    try {
      const response = await apiProvider.request<IAirport[]>({
        method: 'get',
        url: `/airports`,
        headers: {
          'Content-Type': 'application/json',
        },
        params: {
          _limit: 10,
        },
      });

      return response.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);
