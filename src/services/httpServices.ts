import axios from "axios";
// import { toast } from "react-toastify";
import auth from './authService';
import { IHttp } from "../models/types/IHttp";

axios.interceptors.response.use(null, error => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;
  if (!expectedError) console.log("Logging the error", error);
  // toast.error("There was an unexpected error herer");
  return Promise.reject(error);
});

// calling protcted api
function setJwtHeaders():object {
  let token:string|null =  auth.getJWT();

  return {
    headers: {
      'Content-type':'application/json',
       Authorization: `Bearer ${token}` }
    };
}
export function setURL():string{
  return 'http://127.0.0.1:3500/api/v1/'
}

export function setFileURL():string{
  return 'http://127.0.0.1:3500/'
}


const instance = axios.create({
  baseURL: setURL(),
  headers: {
      'content-type':'application/json',
      "Accept":"application/json",
      Authorization: auth.getCurrentUser()
  },
});
const http:IHttp= {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
  setJwtHeaders,
  setURL:setURL(),
  setFileURL:setFileURL(),
  instance:instance,
};
export default http;
