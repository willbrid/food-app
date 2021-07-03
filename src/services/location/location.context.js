import React, { useState, createContext, useEffect } from "react";

import { locationRequest, locationTransform } from './location.service';

export const LocationContext = createContext();

export const LocationContextProvider = ({ children }) => {
    const [keyword, setKeyword] = useState("san francisco");
    const [location, setLocation] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const onSearch = (searchKeyword) => {
        setKeyword(searchKeyword);
        if(!searchKeyword.length) {
            return;
        }

        setIsLoading(true);

        locationRequest(searchKeyword.toLowerCase())
        .then(locationTransform)
        .then((result) => {
            setIsLoading(false);
            setLocation(result);
        })
        .catch((err) => {
            setIsLoading(false);
            setError(err);
        });
    };

    return (
        <LocationContext.Provider value={{
            isLoading,
            error,
            location,
            search: onSearch,
            keyword,
        }}>
            {children}
        </LocationContext.Provider>
    );
};