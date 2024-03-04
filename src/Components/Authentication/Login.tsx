import { useState } from 'react';

import { useForm } from 'react-hook-form';
import {
  Navigate,
  useLocation,
} from 'react-router-dom';

import { zodResolver } from '@hookform/resolvers/zod';

import { useAuth } from '../../context/AuthContext';
import { loginSchema } from '../../models/schemas/Login';
import { ILoginData } from '../../models/types/ILoginData';
import { LoginForm } from '../../Pages/Auths/LoginForm';
import auth from '../../services/authService';
import useSubmitData from '../../hooks/useSubmitData';

export const Login: React.FC = () => {
 
  const [checked, setChecked] = useState<boolean>(false)

  const {submitData:submit, isLoading} = useSubmitData()
  const location = useLocation()
  const { setAuth } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors, },
  } = useForm<ILoginData>({
    resolver: zodResolver(loginSchema),
  })


  const { from } = location.state || { from: { pathname: '/' } };
  
  const handleCheckBox = (checked: boolean) => {
    setChecked(checked);
  }

  
  
  const submitData = async (data: ILoginData) => {
    
    const resposne = await submit({
      data : { email: data.email, password: data.password, remember:checked},
      navigationPath: from,
      endpoint:`auth/login`
    })

    if(resposne?.status){
        auth.setJWT(resposne.data.token)
        setAuth(true)
    }

  }

  if (auth.getCurrentUser()) { return <Navigate to='/' /> }
  return (

    <LoginForm
      errors={errors}
      register={register}
      handleSubmit={handleSubmit}
      submit={submitData}
      isLoading={isLoading}
      isChecked = {checked}
      onCheckboxChange = {handleCheckBox}
    />
  );
}

export default Login;
