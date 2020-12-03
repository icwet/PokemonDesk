import { useEffect, useState } from 'react';
import request from 'api/request';
import { EndPoints } from 'api/getUrlWithParamsConfig';
import { QueryParams } from 'api/types';

function useDataFetch<T>(
  url: EndPoints,
  params?: Partial<QueryParams>,
  deps: any[] = [],
): { result: T | null; isLoading: boolean; error: string } {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [result, setResult] = useState<T | null>(null);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const getData = async () => {
      try {
        const json = await request(url, params);
        setResult(json);
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
