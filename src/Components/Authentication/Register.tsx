import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ILoginData } from "../../models/types/ILoginData";
import auth from "../../services/authService";
import { Navigate } from "react-router-dom";
import { loginSchema } from "../../models/schemas/Login";

import { RegisterForm } from "../../Pages/Auths/RegisterForm";
import useSubmitData from "../../hooks/useSubmitData";

export const Register: React.FC = () => {
    
    const {submitData:submit, isLoading} = useSubmitData()
    const {
        register,
        handleSubmit,
        formState: { errors, },
    } = useForm<ILoginData>({
        resolver: zodResolver(loginSchema),
    })

    const submitData = async (data: ILoginData) => {

        const loginObject = { email: data.email, password: data.password }
        await submit({
            data : { ...loginObject},
            navigationPath: '/login',
            endpoint:`auth/signup`
          })
    }

    if (auth.getCurrentUser()) { return <Navigate to='/' /> }

    return (
        <RegisterForm
            errors={errors}
            register={register}
            handleSubmit={handleSubmit}
            submit={submitData}
            isLoading={isLoading}
        />
    );
}

export default Register;

