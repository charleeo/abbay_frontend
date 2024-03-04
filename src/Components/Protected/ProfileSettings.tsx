/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  useEffect,
  useState,
} from 'react';

import {
  useNavigate,
  useParams,
} from 'react-router-dom';
import { toast } from 'react-toastify';

import useRefreshToken from '../../hooks/useRefreshToken';
import { ProfileSettingHTML } from '../../Pages/profile/ProfileSettings';
import http from '../../services/httpServices';
import { ScreenLoader } from '../../utils/screenloader';

const ProfileSettings = () => {
  const { id } = useParams()
  const { errorMessage } = useRefreshToken()
  const [isLoading, setIsLoading] = useState(false)
  const [data, setData] = useState<any>([])

  const [error, setError] = useState<string>('')
  const navigation = useNavigate()
  

  const [formData, setFormData] = useState({
    username: '',
    lastname: '',
    address: '',
    phone: '',
    email: '',
    firstname: '',
  });

  const fetchData = async () => {
    setIsLoading(true)
    setError('')
    try {
      const response = await http.get(`${http.setURL}user/profile/${id}`, http.setJwtHeaders());
      const data = await response.data;
      setFormData({
        email: data.email,
        username: data.username,
        lastname: data.lastname,
        firstname: data.firstname,
        address: data.address,
        phone: data.phone,
      });
      setData(data)
      setIsLoading(false)
    } catch (ex: any) {
      if (ex.response !== undefined || (ex?.response?.status < 500 && ex.response.data > 399)) {
        let errorMsg = ex?.response?.data?.message
        if (Array.isArray(errorMsg)) { errorMsg = errorMsg[0] }
        setError(errorMsg)
      }
      else {
        setError('There was an unexpected error. Please try again')
      }

      toast.error(error, { autoClose: 3000 })
      setIsLoading(false)
    }
  };

  useEffect(() => {

    fetchData();
  }, []);

  const handleChange = (e: any) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };



  const { username, lastname, phone, address, firstname, email } = formData

  const handleProfileUpdate = async (event: any) => {
    try {

      setIsLoading(true)
      event.preventDefault()
      const url = `${http.setURL}user/${data.uuid}/update`
      const updateResponse = await http.post(url, { phone, lastname, firstname, address, username }, http.setJwtHeaders())
      toast.success(updateResponse.data.message, { autoClose: 2000 })
      errorMessage
      setIsLoading(false)
      navigation("/profile")

    } catch (ex: any) {
      if (ex.response !== undefined || (ex?.response?.status < 500 && ex.response.data > 399)) {
        let errorMsg = ex?.response?.data?.message
        if (Array.isArray(errorMsg)) { errorMsg = errorMsg[0] }
        setError(errorMsg)
      }
      else {
        setError('There was an unexpected error. Please try again')
      }

      toast.error(error, { autoClose: 3000 })
      setIsLoading(false)
    }
  }

  return (
    <>
      <ScreenLoader status={isLoading} />
      <ProfileSettingHTML
        email={email}
        phone={phone}
        address={address}
        lastname={lastname}
        firstname={firstname}
        handleChange={handleChange}
        handleProfileUpdate={handleProfileUpdate}
        username={username}
        profile_picture={http.setFileURL + data.profile_picture}
      />

    </>
  )

};

export default ProfileSettings;
