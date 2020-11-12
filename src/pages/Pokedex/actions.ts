import { useEffect, useState } from 'react';

function useDataFetch<T>(url: string) {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [result, setResult] = useState<T | null>(null);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetch(url);
        const json = await data.json();
        setResult(json);
      } catch (e) {
        setError(e.toString());
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, [url]);

  return {
    result,
    isLoading,
    error,
  };
}

export default useDataFetch;
