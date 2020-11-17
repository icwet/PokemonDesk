import Url from 'url';
import getUrlWithParamsConfig, { EndPoints } from './getUrlWithParamsConfig';
import { QueryParams } from './types';

const request = (endpoint: EndPoints, params?: QueryParams) =>
  fetch(Url.format(getUrlWithParamsConfig(endpoint, params))).then((res) => res.json());

export default request;
