import { useState } from 'react';
import { toast } from 'react-toastify';
import http from '../services/httpServices';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const useSubmitData = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
     const navigation = useNavigate()


    const submitData = async ({ data, method='post', endpoint, successMessage, navigationPath, }:any) => {
        try {
            const alternatelMessage = successMessage?? "Success"
            
            setIsLoading(true);
            setError('');
            
            const responses = await axios({
                method: method,
                url: `${http.setURL}${endpoint}`,
                data: { ...data },
                headers: http.setJwtHeaders().headers
            });

            const responseData = responses.data;
            const message = responseData.message;

            setIsLoading(false);
            setError('');
            toast.success(message || alternatelMessage, { autoClose: 3000 });
            if (navigationPath) {
                navigation(navigationPath??'');
            }
            else {
                setTimeout(function(){
                    window.location.reload()
                    },3000)
                }
            return responseData; // Return data for potential future use

        } catch (ex:any) {
            let errorMsg = 'There was an unexpected error. Please try again';
                // console.log("Response",ex.response.data)

            if (ex.response && ex.response.status < 500 && ex.response.status > 399) {
                errorMsg = ex.response.data.message ?? errorMsg;
                if (Array.isArray(errorMsg)) {
                    errorMsg = errorMsg[0];
                    const splittedMsg = errorMsg.split(":");
                    if (splittedMsg.length > 1) {
                        errorMsg = splittedMsg[0].concat(splittedMsg[1]);
                    }
                }
            }

            setError(errorMsg);
            toast.error(errorMsg, { autoClose: 3000 });
            setIsLoading(false);
            throw ex; // Re-throw the exception for potential error handling by the caller
        }
    };

    return { isLoading, error, submitData };
};

export default useSubmitData;
