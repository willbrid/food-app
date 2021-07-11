import React, { useState, createContext } from 'react';

import { loginRequest, registerRequest } from './authentication.service';

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);

    const onLogin = (email, password) => {
        setIsLoading(true);
        if(error) {
            setError(null);
        }

        loginRequest(email, password)
        .then((u) => {
            setIsLoading(false);
            setUser(u);
        }).catch((e) => {
            setIsLoading(false);
            setError(e.toString());
        });
    }; 

    const onRegister = (email, password, repeatedPassword) => {
        if(password !== repeatedPassword) {
            setError("Error: Passwords do not match");
            return;
        }

        setIsLoading(true);
        if(error) {
            setError(null);
        }

        registerRequest(email, password)
        .then((u) => {
            setIsLoading(false);
            setUser(u);
        }).catch((e) => {
            setIsLoading(false);
            setError(e.toString());
        });
    };

    return (
        <AuthenticationContext.Provider
            value={{
                user,
                isLoading,
                error,
                onLogin,
                onRegister
            }}
        >
            {children}
        </AuthenticationContext.Provider>
    );
};