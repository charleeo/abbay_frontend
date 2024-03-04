// useGetData.ts
import {
  useEffect,
  useState,
} from 'react';

import axios, {
  AxiosError,
  AxiosResponse,
} from 'axios';

interface UseGetDataProps {
  url: string;
  method: string
  headers:any
}

interface UseGetDataState<T> {
  data: T | null|any;
  loading: boolean;
  errorMessage: AxiosError | null;
  refetch: (endpoint?:string) => void; // Define the refetch function

}

const useGetData = <T>({ url,method,headers }: UseGetDataProps): UseGetDataState<T> => {
  const [data, setData] = useState< any>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [errorMessage, setError] = useState<AxiosError | null>(null);

  const fetchData = async (endpoint:string) => {
    
    try {
      const response: AxiosResponse<T> = await axios({
        method,
        url:endpoint,
        headers,
      });

      setData(response.data);
    } catch (err:any) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {

    fetchData(url);
  }, [url]);

  const refetch = (endpoint?:string) => {
    fetchData(endpoint ?? url); // Implement refetch functionality
  };


  return { data, loading, errorMessage,refetch };
}

export default useGetData;
