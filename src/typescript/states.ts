import { IAirport } from './entities';
import { ISerializableError } from '../api/api';

export interface IAirportState {
  data: IAirport[] | null;
  loading: number;
  error: ISerializableError | null;
}
