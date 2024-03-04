// useGetData.ts
import {
  useEffect,
  useState,
} from 'react';

import { AxiosError } from 'axios';

import { useAuth } from '../context/AuthContext';
import auth from '../services/authService';
import http from '../services/httpServices';

const useRefreshToken = () => {
    
    const [loading, setLoading] = useState<boolean>(true);
    const { setAuth } = useAuth();
    const [errorMessage, setError] = useState<AxiosError | null>(null);
    const refreshUrl = `${http.setURL}auth/refresh`
    useEffect(() => {
        const fetchData = async () => {
            
            try {
            const response = await http.post(refreshUrl, { refresh: auth.getRefreshJWT() });
            auth.setJWT(response.data.data.token)
            setAuth(true)
         
        } catch (err:any) {
          setError(err);
        } finally {
          setLoading(false);
        }
      };
  
      fetchData();
    }, [refreshUrl]);
  
    return {  loading, errorMessage };
  };
  
  export default useRefreshToken;
  