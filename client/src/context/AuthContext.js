// AuthContext.js
import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null); // Initially set to null

    const login = (userData) => {
        setUser(userData); // Set user data on login
    };

    const logout = () => {
        setUser(null); // Clear user data on logout
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;