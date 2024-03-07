export interface IAirport {
  id: number;
  icao: string;
  iata: string;
  localCode: string;
  shortName: string;
  fullName: string;
  municipalityName: string;
  location: {
    lat: number;
    lon: number;
  };
  country: {
    code: string;
    name: string;
  };
  continent: {
    code: string;
    name: string;
  };
  timeZone: string;
  urls: {
    webSite: string;
    wikipedia: string;
    twitter: string;
    googleMaps: string;
    flightRadar: string;
  };
  image: string;
}

export interface IRouteAirport {
  id: number;
  time: string;
  code: string;
  timeZone: string;
  type: string;
  label: string;
  country: {
    label: string;
    code: string;
    city: string;
  };
}

export interface IRouteDuration {
  text: string;
  value: number;
}

export interface IRouteTotals {
  currency: string;
  total: number;
}

export interface IRoute {
  id: number;
  flightCode: string;
  flightName: string;
  stops: number;
  cabinType: string;
  departureAirport: IRouteAirport;
  arrivalAirport: IRouteAirport;
  duration: IRouteDuration;
  totals: IRouteTotals;
}
