import { IAirport, IRoute } from './entities';
import { ISerializableError } from '../api/api';

export interface IAirportState {
  data: IAirport[] | null;
  activeAirport: number | null;
  routes: IRoute[] | null;
  loading: number;
  error: ISerializableError | null;
}
