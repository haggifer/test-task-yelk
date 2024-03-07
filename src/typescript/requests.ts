export interface IAirportListParams {
  search?: string;
  _limit?: number;
}

export interface IRouteListParams {
  airport_id: number;
  _limit?: number;
}
