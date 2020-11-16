import { useEffect, useState } from 'react';
import request from 'api/request';
import { EndPoints } from 'api/getUrlWithParamsConfig';
import { QueryParams } from 'api/types';

function useDataFetch<T>(
  url: EndPoints,
  params?: QueryParams,
  deps: any[] = [],
): { result: T | null; isLoading: boolean; error: string } {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [result, setResult] = useState<T | null>(null);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await request(url, params);
        setResult(result);
      } catch (e) {
        setError(e.toString());
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, deps);

  return {
    result,
    isLoading,
    error,
  };
}

export default useDataFetch;
