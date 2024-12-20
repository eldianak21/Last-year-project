// src/contexts/AuthContext.js

import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    
    const login = (userData) => {
        setUser(userData); // Here, you would typically also store the user info in localStorage or a cookie
    };

    const logout = () => {
        setUser(null); // Clear user info on logout
    };

    const value = {
        user,
        login,
        logout,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
    return useContext(AuthContext);
};