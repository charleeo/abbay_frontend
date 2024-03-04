import React, { createContext, useContext, useEffect, useState, Dispatch, SetStateAction } from 'react';
import { auth as authService } from "../services/authService";

interface IAuthContextType {
    children?: React.ReactNode
}

interface IAuthContext {
    auth: any
    user: any
    setAuth: Dispatch<SetStateAction<null | any>>
}


const AuthContext = createContext<IAuthContext>({
    auth: null,
    setAuth: () => { },
    user: null,
});

export const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }: IAuthContextType) => {
    const [auth, setAuth] = useState(null);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const isAuth = async () => {
            try {
                setUser(authService.getCurrentUser());
            } catch (error) {
                setUser(null);
            };
        };

        isAuth();
    }, [auth]);

    return (
        <AuthContext.Provider value={{ auth, setAuth, user }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;