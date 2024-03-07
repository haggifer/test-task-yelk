import { IAirport, IRoute, IRouteDuration, IRouteTotals } from "../../../typescript/entities";
import { random } from "lodash";

export const airportsStaticData: IAirport[] = [
  {
    id: Math.round(Math.random() * 10**9),
    icao: "KJFK",
    iata: "JFK",
    localCode: "JFK",
    shortName: "John F. Kennedy Intl",
    fullName: "John F. Kennedy International Airport",
    municipalityName: "New York City",
    location: {
      lat: 40.6444,
      lon: -73.9742,
    },
    country: {
      code: "US",
      name: "United States",
    },
    continent: {
      code: "NA",
      name: "North America",
    },
    timeZone: "America/New_York",
    urls: {
      webSite: "https://www.panynj.gov/airports/jfk-airport",
      wikipedia: "https://en.wikipedia.org/wiki/John_F._Kennedy_International_Airport",
      twitter: "https://twitter.com/JFKairport",
      googleMaps: "https://www.google.com/maps/@40.6444,-73.9742,14z",
      flightRadar: "https://www.flightradar24.com/40.64,-73.97/14",
    },
    image: 'https://res.cloudinary.com/djftvooe4/image/upload/v1709740795/airport1_bi34mh.jpg',
  },
  {
    id: Math.round(Math.random() * 10**9),
    icao: "EGLL",
    iata: "LHR",
    localCode: "LHR",
    shortName: "Heathrow",
    fullName: "London Heathrow Airport",
    municipalityName: "London",
    location: {
      lat: 51.4706,
      lon: -0.4619,
    },
    country: {
      code: "GB",
      name: "United Kingdom",
    },
    continent: {
      code: "EU",
      name: "Europe",
    },
    timeZone: "Europe/London",
    urls: {
      webSite: "https://www.heathrow.com/",
      wikipedia: "https://en.wikipedia.org/wiki/London_Heathrow_Airport",
      twitter: "https://twitter.com/HeathrowAirport",
      googleMaps: "https://www.google.com/maps/@51.4706,-0.4619,14z",
      flightRadar: "https://www.flightradar24.com/51.47,0.46/14",
    },
    image: 'https://res.cloudinary.com/djftvooe4/image/upload/v1709740795/airport2_y3zhug.jpg',
  },
  {
    id: Math.round(Math.random() * 10**9),
    icao: "SYD",
    iata: "SYD",
    localCode: "SYD",
    shortName: "Kingsford Smith",
    fullName: "Kingsford Smith International Airport",
    municipalityName: "Sydney",
    location: {
      lat: -33.8678,
      lon: 151.2194,
    },
    country: {
      code: "AU",
      name: "Australia",
    },
    continent: {
      code: "OC",
      name: "Oceania",
    },
    timeZone: "Australia/Sydney",
    urls: {
      webSite: "https://www.sydneyairport.com.au/",
      wikipedia: "https://en.wikipedia.org/wiki/Kingsford_Smith_International_Airport",
      twitter: "https://twitter.com/SydneyAirport",
      googleMaps: "https://www.google.com/maps/@-33.8678,151.2194,14z",
      flightRadar: "https://www.flightradar24.com/-33.87,151.22/14",
    },
    image: 'https://res.cloudinary.com/djftvooe4/image/upload/v1709740794/airport3_wopgi4.jpg',
  },
  {
    id: Math.round(Math.random() * 10**9),
    icao: "DXB",
    iata: "DXB",
    localCode: "DXB",
    shortName: "Dubai International",
    fullName: "Dubai International Airport",
    municipalityName: "Dubai",
    location: {
      lat: 25.2561,
      lon: 55.3608,
    },
    country: {
      code: "AE",
      name: "United Arab Emirates",
    },
    continent: {
      code: "AS",
      name: "Asia",
    },
    timeZone: "Asia/Dubai",
    urls: {
      webSite: "https://www.dubaiairports.ae/",
      wikipedia: "https://en.wikipedia.org/wiki/Dubai_International_Airport",
      twitter: "https://twitter.com/DubaiAirports",
      googleMaps: "https://www.google.com/maps/@25.2561,55.3608,14z",
      flightRadar: "https://www.flightradar24.com/25.26,55.36/14",
    },
    image: 'https://res.cloudinary.com/djftvooe4/image/upload/v1709740794/airport6_wsblam.jpg',
  },
  {
    id: Math.round(Math.random() * 10**9),
    icao: "EWR",
    iata: "EWR",
    localCode: "EWR",
    shortName: "Newark Liberty",
    fullName: "Newark Liberty International Airport",
    municipalityName: "Newark",
    location: {
      lat: 40.7378,
      lon: -74.1714,
    },
    country: {
      code: "US",
      name: "United States",
    },
    continent: {
      code: "NA",
      name: "North America",
    },
    timeZone: "America/New_York",
    urls: {
      webSite: "https://www.newarkliberty.com/",
      wikipedia: "https://en.wikipedia.org/wiki/Newark_Liberty_International_Airport",
      twitter: "https://twitter.com/EWRairport",
      googleMaps: "https://www.google.com/maps/@40.7378,-74.1714,14z",
      flightRadar: "https://www.flightradar24.com/40.74,-74.17/14",
    },
    image: 'https://res.cloudinary.com/djftvooe4/image/upload/v1709740794/airport7_w2cc5l.jpg',
  },
  {
    id: Math.round(Math.random() * 10**9),
    icao: "LAX",
    iata: "LAX",
    localCode: "LAX",
    shortName: "Los Angeles",
    fullName: "Los Angeles International Airport",
    municipalityName: "Los Angeles",
    location: {
      lat: 33.9425,
      lon: -118.4085,
    },
    country: {
      code: "US",
      name: "United States",
    },
    continent: {
      code: "NA",
      name: "North America",
    },
    timeZone: "America/Los_Angeles",
    urls: {
      webSite: "https://www.lawa.fly.la/",
      wikipedia: "https://en.wikipedia.org/wiki/Los_Angeles_International_Airport",
      twitter: "https://twitter.com/LAXairport",
      googleMaps: "https://www.google.com/maps/@33.9425,-118.4085,14z",
      flightRadar: "https://www.flightradar24.com/33.94,-118.41/14",
    },
    image: 'https://res.cloudinary.com/djftvooe4/image/upload/v1709740795/airport8_j7y1vd.jpg',
  },
  {
    id: Math.round(Math.random() * 10**9),
    icao: "DOH",
    iata: "DOH",
    localCode: "DOH",
    shortName: "Hamad Intl",
    fullName: "Hamad International Airport",
    municipalityName: "Doha",
    location: {
      lat: 25.2796,
      lon: 51.5312,
    },
    country: {
      code: "QA",
      name: "Qatar",
    },
    continent: {
      code: "AS",
      name: "Asia",
    },
    timeZone: "Asia/Doha",
    urls: {
      webSite: "https://www.dohahamadairport.com/",
      wikipedia: "https://en.wikipedia.org/wiki/Hamad_International_Airport",
      twitter: "https://twitter.com/HamadIntlAirport",
      googleMaps: "https://www.google.com/maps/@25.2796,51.5312,14z",
      flightRadar: "https://www.flightradar24.com/25.28,51.53/14",
    },
    image: 'https://res.cloudinary.com/djftvooe4/image/upload/v1709740794/airport9_htuagi.jpg',
  },
  {
    id: Math.round(Math.random() * 10**9),
    icao: "CPT",
    iata: "CPT",
    localCode: "CPT",
    shortName: "Cape Town Intl",
    fullName: "Cape Town International Airport",
    municipalityName: "Cape Town",
    location: {
      lat: -33.9859,
      lon: 18.6045,
    },
    country: {
      code: "ZA",
      name: "South Africa",
    },
    continent: {
      code: "AF",
      name: "Africa",
    },
    timeZone: "Africa/Johannesburg",
    urls: {
      webSite: "https://www.capetowninternationalairport.com/",
      wikipedia: "https://en.wikipedia.org/wiki/Cape_Town_International_Airport",
      twitter: "https://twitter.com/CTAirport",
      googleMaps: "https://www.google.com/maps/@-33.9859,18.6045,14z",
      flightRadar: "https://www.flightradar24.com/-33.99,18.60/14",
    },
    image: 'https://res.cloudinary.com/djftvooe4/image/upload/v1709740795/airport10_c1f3oj.jpg',
  },
  {
    id: Math.round(Math.random() * 10**9),
    icao: "HKG",
    iata: "HKG",
    localCode: "HKG",
    shortName: "Chek Lap Kok",
    fullName: "Hong Kong International Airport",
    municipalityName: "Hong Kong",
    location: {
      lat: 22.3088,
      lon: 114.188,
    },
    country: {
      code: "HK",
      name: "Hong Kong (S.A.R.)",
    },
    continent: {
      code: "AS",
      name: "Asia",
    },
    timeZone: "Asia/Hong_Kong",
    urls: {
      webSite: "https://www.hongkongairport.com/",
      wikipedia: "https://en.wikipedia.org/wiki/Hong_Kong_International_Airport",
      twitter: "https://twitter.com/HKIA",
      googleMaps: "https://www.google.com/maps/@22.3088,114.188,14z",
      flightRadar: "https://www.flightradar24.com/22.31,114.19/14",
    },
    image: 'https://res.cloudinary.com/djftvooe4/image/upload/v1709740794/airport4_nctpac.jpg',
  },
  {
    id: Math.round(Math.random() * 10**9),
    icao: "YYZ",
    iata: "YYZ",
    localCode: "YYZ",
    shortName: "Toronto Pearson",
    fullName: "Toronto Pearson International Airport",
    municipalityName: "Toronto",
    location: {
      lat: 43.6777,
      lon: -79.6248,
    },
    country: {
      code: "CA",
      name: "Canada",
    },
    continent: {
      code: "NA",
      name: "North America",
    },
    timeZone: "America/Toronto",
    urls: {
      webSite: "https://www.torontopearson.com/",
      wikipedia: "https://en.wikipedia.org/wiki/Toronto_Pearson_International_Airport",
      twitter: "https://twitter.com/TorontoPearson",
      googleMaps: "https://www.google.com/maps/@43.6777,-79.6248,14z",
      flightRadar: "https://www.flightradar24.com/43.68,-79.62/14",
    },
    image: 'https://res.cloudinary.com/djftvooe4/image/upload/v1709740794/airport5_ydcddf.jpg',
  },
  {
    id: Math.round(Math.random() * 10**9),
    icao: "MIA",
    iata: "MIA",
    localCode: "MIA",
    shortName: "Miami",
    fullName: "Miami International Airport",
    municipalityName: "Miami",
    location: {
      lat: 25.7959,
      lon: -80.287,
    },
    country: {
      code: "US",
      name: "United States",
    },
    continent: {
      code: "NA",
      name: "North America",
    },
    timeZone: "America/New_York",
    urls: {
      webSite: "https://www.miami-airport.com/",
      wikipedia: "https://en.wikipedia.org/wiki/Miami_International_Airport",
      twitter: "https://twitter.com/MiamiAirport",
      googleMaps: "https://www.google.com/maps/@25.7959,-80.287,14z",
      flightRadar: "https://www.flightradar24.com/25.8,-80.29/14",
    },
    image: 'https://res.cloudinary.com/djftvooe4/image/upload/v1709759822/airport19_jcul5q.jpg',
  },
  {
    id: Math.round(Math.random() * 10**9),
    icao: "SFO",
    iata: "SFO",
    localCode: "SFO",
    shortName: "San Francisco",
    fullName: "San Francisco International Airport",
    municipalityName: "San Francisco",
    location: {
      lat: 37.6213,
      lon: -122.379,
    },
    country: {
      code: "US",
      name: "United States",
    },
    continent: {
      code: "NA",
      name: "North America",
    },
    timeZone: "America/Los_Angeles",
    urls: {
      webSite: "https://www.flysfo.com/",
      wikipedia: "https://en.wikipedia.org/wiki/San_Francisco_International_Airport",
      twitter: "https://twitter.com/flysfo",
      googleMaps: "https://www.google.com/maps/@37.6213,-122.379,14z",
      flightRadar: "https://www.flightradar24.com/37.62,-122.38/14",
    },
    image: 'https://res.cloudinary.com/djftvooe4/image/upload/v1709759822/airport21_asgop4.jpg',
  },
  {
    id: Math.round(Math.random() * 10**9),
    icao: "DME",
    iata: "DME",
    localCode: "DME",
    shortName: "Domodedovo",
    fullName: "Moscow Domodedovo Airport",
    municipalityName: "Moscow",
    location: {
      lat: 55.4088,
      lon: 37.9063,
    },
    country: {
      code: "RU",
      name: "Russia",
    },
    continent: {
      code: "EU",
      name: "Europe",
    },
    timeZone: "Europe/Moscow",
    urls: {
      webSite: "https://www.dme.ru/",
      wikipedia: "https://en.wikipedia.org/wiki/Moscow_Domodedovo_Airport",
      twitter: "https://twitter.com/dme_ru",
      googleMaps: "https://www.google.com/maps/@55.4088,37.9063,14z",
      flightRadar: "https://www.flightradar24.com/55.41,37.91/14",
    },
    image: 'https://res.cloudinary.com/djftvooe4/image/upload/v1709759820/airport11_yf2svy.jpg',
  },
  {
    id: Math.round(Math.random() * 10**9),
    icao: "DEL",
    iata: "DEL",
    localCode: "DEL",
    shortName: "Indira Gandhi",
    fullName: "Indira Gandhi International Airport",
    municipalityName: "Delhi",
    location: {
      lat: 28.5682,
      lon: 77.1129,
    },
    country: {
      code: "IN",
      name: "India",
    },
    continent: {
      code: "AS",
      name: "Asia",
    },
    timeZone: "Asia/Kolkata",
    urls: {
      webSite: "https://www.newdelhiairport.in/",
      wikipedia: "https://en.wikipedia.org/wiki/Indira_Gandhi_International_Airport",
      twitter: "https://twitter.com/DelhiAirport",
      googleMaps: "https://www.google.com/maps/@28.5682,77.1129,14z",
      flightRadar: "https://www.flightradar24.com/28.57,77.11/14",
    },
    image: 'https://res.cloudinary.com/djftvooe4/image/upload/v1709759820/airport14_hkhl2r.jpg',
  },
  {
    id: Math.round(Math.random() * 10**9),
    icao: "SIN",
    iata: "SIN",
    localCode: "SIN",
    shortName: "Changi",
    fullName: "Singapore Changi Airport",
    municipalityName: "Singapore",
    location: {
      lat: 1.3617,
      lon: 103.9964,
    },
    country: {
      code: "SG",
      name: "Singapore",
    },
    continent: {
      code: "AS",
      name: "Asia",
    },
    timeZone: "Asia/Singapore",
    urls: {
      webSite: "https://www.changiairport.com/",
      wikipedia: "https://en.wikipedia.org/wiki/Singapore_Changi_Airport",
      twitter: "https://twitter.com/ChangiAirport",
      googleMaps: "https://www.google.com/maps/@1.3617,103.9964,14z",
      flightRadar: "https://www.flightradar24.com/1.36,103.99/14",
    },
    image: 'https://res.cloudinary.com/djftvooe4/image/upload/v1709759820/airport12_qx5onx.jpg',
  },
  {
    id: Math.round(Math.random() * 10**9),
    icao: "PEK",
    iata: "PEK",
    localCode: "PEK",
    shortName: "Capital",
    fullName: "Beijing Capital International Airport",
    municipalityName: "Beijing",
    location: {
      lat: 40.0801,
      lon: 116.5774,
    },
    country: {
      code: "CN",
      name: "China",
    },
    continent: {
      code: "AS",
      name: "Asia",
    },
    timeZone: "Asia/Shanghai",
    urls: {
      webSite: "https://www.bcia.com.cn/en/",
      wikipedia: "https://en.wikipedia.org/wiki/Beijing_Capital_International_Airport",
      twitter: "https://twitter.com/BJAirport",
      googleMaps: "https://www.google.com/maps/@40.0801,116.5774,14z",
      flightRadar: "https://www.flightradar24.com/40.08,116.58/14",
    },
    image: 'https://res.cloudinary.com/djftvooe4/image/upload/v1709759820/airport13_zrfpa8.jpg',
  },
  {
    id: Math.round(Math.random() * 10**9),
    icao: "ICN",
    iata: "ICN",
    localCode: "ICN",
    shortName: "Incheon",
    fullName: "Incheon International Airport",
    municipalityName: "Incheon",
    location: {
      lat: 37.466,
      lon: 126.458,
    },
    country: {
      code: "KR",
      name: "South Korea",
    },
    continent: {
      code: "AS",
      name: "Asia",
    },
    timeZone: "Asia/Seoul",
    urls: {
      webSite: "https://www.airport.kr/eng/",
      wikipedia: "https://en.wikipedia.org/wiki/Incheon_International_Airport",
      twitter: "https://twitter.com/ICNAirport",
      googleMaps: "https://www.google.com/maps/@37.466,126.458,14z",
      flightRadar: "https://www.flightradar24.com/37.47,126.46/14",
    },
    image: 'https://res.cloudinary.com/djftvooe4/image/upload/v1709759819/airport16_ffkees.jpg',
  },
  {
    id: Math.round(Math.random() * 10**9),
    icao: "MAD",
    iata: "MAD",
    localCode: "MAD",
    shortName: "Barajas",
    fullName: "Adolfo Suárez Madrid–Barajas Airport",
    municipalityName: "Madrid",
    location: {
      lat: 40.4742,
      lon: -3.5636,
    },
    country: {
      code: "ES",
      name: "Spain",
    },
    continent: {
      code: "EU",
      name: "Europe",
    },
    timeZone: "Europe/Madrid",
    urls: {
      webSite: "https://www.aena.es/en/madrid-barajas-adolfo-suarez-airport.htm",
      wikipedia: "https://en.wikipedia.org/wiki/Adolfo_Suárez_Madrid–Barajas_Airport",
      twitter: "https://twitter.com/MADairport",
      googleMaps: "https://www.google.com/maps/@40.4742,-3.5636,14z",
      flightRadar: "https://www.flightradar24.com/40.47,3.56/14",
    },
    image: 'https://res.cloudinary.com/djftvooe4/image/upload/v1709759819/airport15_fzwpvq.jpg',
  },
  {
    id: Math.round(Math.random() * 10**9),
    icao: "CDG",  // Duplicate I removed for uniqueness
    iata: "CDG",
    localCode: "CDG",
    shortName: "Charles de Gaulle",
    fullName: "Paris-Charles de Gaulle Airport",
    municipalityName: "Paris",
    location: {
      lat: 49.0114,
      lon: 2.5576,
    },
    country: {
      code: "FR",
      name: "France",
    },
    continent: {
      code: "EU",
      name: "Europe",
    },
    timeZone: "Europe/Paris",
    urls: {
      webSite: "https://www.aeroportsdeparis.fr/en/cdg/",
      wikipedia: "https://en.wikipedia.org/wiki/Paris-Charles_de_Gaulle_Airport",
      twitter: "https://twitter.com/CDGAirport",
      googleMaps: "https://www.google.com/maps/@49.0114,2.5576,14z",
      flightRadar: "https://www.flightradar24.com/49.01,2.56/14",
    },
    image: 'https://res.cloudinary.com/djftvooe4/image/upload/v1709759819/airport18_jhow5z.jpg',
  },
  {
    id: Math.round(Math.random() * 10**9),
    icao: "GRU",
    iata: "GRU",
    localCode: "GRU",
    shortName: "Guarulhos",
    fullName: "São Paulo–Guarulhos International Airport",
    municipalityName: "São Paulo",
    location: {
      lat: -23.4356,
      lon: -46.4792,
    },
    country: {
      code: "BR",
      name: "Brazil",
    },
    continent: {
      code: "SA",
      name: "South America",
    },
    timeZone: "America/Sao_Paulo",
    urls: {
      webSite: "https://www.gru.com.br/en/",
      wikipedia: "https://en.wikipedia.org/wiki/São_Paulo–Guarulhos_International_Airport",
      twitter: "https://twitter.com/GRUairport",
      googleMaps: "https://www.google.com/maps/@-23.4356,-46.4792,14z",
      flightRadar: "https://www.flightradar24.com/-23.44,-46.48/14",
    },
    image: 'https://res.cloudinary.com/djftvooe4/image/upload/v1709759819/airport17_badw57.jpg',
  },
]

// Function to generate a random number within a range
const getRandomNumber = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Function to generate a random number within a range
function getRandomTimeString(min: number, max: number) {
  const randomHour = min + Math.floor(Math.random() * (max - min)); // Generates a random integer between 0 and 23
  return String(randomHour).padStart(2, '0'); // Ensures the output is always a 2-letter string
}

function getRandomLetter(): string {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const randomIndex = Math.floor(Math.random() * alphabet.length);
  return alphabet[randomIndex];
}

function getRandomArrayItem<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)]
}

// Function to generate a random duration for the route
const generateRandomDuration = (): IRouteDuration => {
  const hours = getRandomNumber(1, 24);
  const minutes = getRandomNumber(0, 59);
  return {
    text: `${hours}h ${minutes}m`,
    value: hours * 60 + minutes,
  };
};

// Function to generate a random total cost for the route
const generateRandomTotal = (): IRouteTotals => {
  const total = getRandomNumber(100, 1000);
  return {
    currency: getRandomArrayItem(['USD', 'EUR']),
    total: total,
  };
};

const createRouteTimeStamps = (): [string, string] => {
  const departureDate = getRandomArrayItem(['04', '05', '06', '07', '08', '09'])
  const departureHour = getRandomTimeString(0, 24)
  const departureMinute = getRandomTimeString(0, 60)

  const arrivalDate = getRandomArrayItem(['04', '05', '06', '07', '08', '09'].filter(item => Number(item) >= Number(departureDate)))
  const arrivalHour = getRandomTimeString(Number(departureHour), 24)
  const arrivalMinute = getRandomTimeString(Number(departureMinute), 60)

  return [
    `2024-03-${departureDate}T${departureHour}:${departureMinute}:00`,
    `2024-03-${arrivalDate}T${arrivalHour}:${arrivalMinute}:00`,
  ]
}

// Function to generate a random route
const generateRandomRoute = (): IRoute => {
  const departureAirport = airportsStaticData[getRandomNumber(0, airportsStaticData.length - 1)];
  let arrivalAirport = airportsStaticData[getRandomNumber(0, airportsStaticData.length - 1)];
  // Ensure departure and arrival airports are not the same
  while (arrivalAirport === departureAirport) {
    arrivalAirport = airportsStaticData[getRandomNumber(0, airportsStaticData.length - 1)];
  }

  const routeTimeStamps = createRouteTimeStamps()

  return {
    id: Math.round(Math.random() * 10**9),
    flightCode: `${getRandomLetter()}${getRandomLetter()}`.toUpperCase() + getRandomNumber(100, 999),
    flightName: [
      "Royal Jordanian",
      "Egyptair",
      "KLM Royal Dutch Airlines",
      "Air France",
      "Lufthansa",
      "Turkish Airlines",
      "Gulf Air",
      "Qatar Airways",
      "Emirates",
      "British Airways"
    ][Math.round(Math.random() * 9)],
    stops: getRandomNumber(0, 4),
    cabinType: getRandomArrayItem<string>(['Economy', 'Business']),
    departureAirport: {
      id: departureAirport.id,
      time: routeTimeStamps[0],
      code: departureAirport.iata,
      timeZone: departureAirport.timeZone,
      type: "1",
      label: departureAirport.fullName,
      country: {
        label: departureAirport.country.name,
        code: departureAirport.country.code,
        city: departureAirport.municipalityName,
      }
    },
    arrivalAirport: {
      id: arrivalAirport.id,
      time: routeTimeStamps[1],
      code: arrivalAirport.iata,
      timeZone: arrivalAirport.timeZone,
      type: "1",
      label: arrivalAirport.fullName,
      country: {
        label: arrivalAirport.country.name,
        code: arrivalAirport.country.code,
        city: arrivalAirport.municipalityName,
      }
    },
    duration: generateRandomDuration(),
    totals: generateRandomTotal(),
  };
};

export const generateRoutes = (): IRoute[] => {
  const routes: IRoute[] = [];
  for (let i = 0; i < 210; i++) {
    const route = generateRandomRoute();
    routes.push(route);
  }
  return routes;
};