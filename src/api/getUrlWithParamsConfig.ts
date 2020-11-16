import config from 'config';
import { QueryParams } from './types';

export const enum EndPoints {
  getPokemons = 'getPokemons',
}

const getUrlWithParamsConfig = (endpointConfig: EndPoints, params?: QueryParams) => ({
  ...config.server,
  ...config.client.endpoint[endpointConfig].url,
  query: {
    ...params,
  },
});

export default getUrlWithParamsConfig;
