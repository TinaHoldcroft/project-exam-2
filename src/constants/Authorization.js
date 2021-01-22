import React, { createContext, useState } from "react";

const Authorization = createContext();

const AuthorizationProvider = ({ children }) => {
    const existingUser = localStorage.getItem("user") || null;

    const [user, setUser] = useState(existingUser);

    function registerUser(username) {
        localStorage.setItem("user", JSON.stringify(username));

        setUser(username);
    }

    function logout() {
        setUser(null);
        localStorage.removeItem("user");
    }

    return <Authorization.Provider value={{ user, registerUser, logout }}>{children}</Authorization.Provider>;
};

export { Authorization, AuthorizationProvider };