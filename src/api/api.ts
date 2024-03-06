import axios from 'axios';

export interface ISerializableError {
  name: string;
  message: string;
  code: string;
  response: {
    status: string;
    data: string;
  };
}

export const apiProvider = axios.create({
  baseURL: `https://aerodatabox.p.rapidapi.com/flights/%7BsearchBy%7D/DL47`,
  headers: {
    'Content-Type': 'application/json',
    'X-RapidAPI-Key': '33788735aamshe237a04850e0d99p1b9945jsnfa62c64bf474',
    'X-RapidAPI-Host': 'aerodatabox.p.rapidapi.com'
  },
});

apiProvider.interceptors.request.use(config => {
  config.params = {
    ...config.params,
    withAircraftImage: 'false',
    withLocation: 'false'
  };

  return config;
}, error => {
  const serializableError: ISerializableError = {
    name: error.name,
    message: error.message,
    code: error.code,
    response: {
      status: error.response.status,
      data: error.response.data,
    },
  };

  return Promise.reject(serializableError);
});

apiProvider.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const serializableError: ISerializableError = {
      name: error.name,
      message: error.message,
      code: error.code,
      response: {
        status: error.response.status,
        data: error.response.data,
      },
    };

    return Promise.reject(serializableError);
  },
);