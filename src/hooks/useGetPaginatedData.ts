import { useEffect, useState } from 'react';
import http from '../services/httpServices';
import { toast } from 'react-toastify';

interface UseGetDataOptions {
  initialPage?: number;
  initialLimit?: number;
  url?:string
}

interface UseGetDataResult {
  data: any[];
  isLoading: boolean;
  error: string;
  fetchData: (options?: { page?: number; limit?: number ,url?:string}) => Promise<void>;
}

export const useGetDataPaginatedData = (endPoint:string, limit:number,
{
  initialPage = 1,
}: UseGetDataOptions = {}): UseGetDataResult => {
  const [data, setData] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

    
  const fetchData = async ({ page = initialPage } = {}) => {
    const url = `${http.setURL}${endPoint}?page=${page}&per_page=${limit}`;
    console.log(limit)
    try {
      setIsLoading(true);
      const responses = await http.get(url, http.setJwtHeaders());
      const responseData = responses.data;
      setData(responseData.data);
      setError('');
    } catch (ex: any) {
      if (ex.response !== undefined || (ex?.response?.status < 500 && ex.response.data > 399)) {
        let errorMsg = ex?.response?.data?.message;
        if (Array.isArray(errorMsg)) {
          errorMsg = errorMsg[0];
        }
        setError(errorMsg);
      } else {
        setError(ex.message);
      }
      toast.error(error, { autoClose: 3000 });
    } finally {
      setIsLoading(false);
    }
  };

  // Use a controlled useEffect to call fetchData when dynamicUrl changes
  useEffect(() => {
    fetchData();
  }, [initialPage]);

  return { data, isLoading, error, fetchData };
};