import { useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

import { useAuth } from '../../context/AuthContext';
import auth from '../../services/authService';

const Logout = () => {
  const navigate = useNavigate()
  const { setAuth } = useAuth()
  useEffect(() => {
    auth.logout()
    setAuth(false)
    navigate('/')
  }, [])

  return (null)
}

export default Logout;
