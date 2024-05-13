import React, { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
export const UserAuthContext = createContext();

export const AuthContext = ({ children }) => {
    const navigate = useNavigate();
    const [authToken, setAuthToken] = useState();
    const [userDetails, setUserDetails] = useState('');

    const loginS = (values) => {
        localStorage.setItem("authorization", values?.data?.token);
        localStorage.setItem("user", values?.data?.user);
        navigate('/dashboard');
    }
    
    useEffect(() => {
        setAuthToken(localStorage.getItem('authorization'))
        setUserDetails(localStorage.getItem('user'));
    }, [])


    return (
        <UserAuthContext.Provider value={{
            authToken,
            setAuthToken,
            loginS,
            userDetails,
            setUserDetails
        }}>
            {children}
        </UserAuthContext.Provider>
    )
}

