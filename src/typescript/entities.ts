export interface IAirport {
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
}
