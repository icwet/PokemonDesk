import config from 'config';
import { QueryParams } from './types';

export const enum EndPoints {
  getPokemons = 'getPokemons',
  getPokemon = 'getPokemon',
}

const getUrlWithParamsConfig = (endpointConfig: EndPoints, params?: Partial<QueryParams>) => {
  const url = {
    ...config.server,
    ...config.client.endpoint[endpointConfig].url,
    query: {},
  };

  if (params) {
    const currentParams = params;
    url.pathname = Object.keys(params).reduce((pathname, param) => {
      const paramKey = param as keyof QueryParams;
      if (pathname.includes(`{${param}}`)) {
        const result = pathname.replace(`{${param}}`, currentParams[paramKey]!);
        delete currentParams[paramKey];
        return result;
      }
      return pathname;
    }, url.pathname);
    url.query = currentParams;
  }

  return url;
};

export default getUrlWithParamsConfig;
