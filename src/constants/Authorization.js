import React, { createContext, useState } from "react";

const Authorization = createContext();

const AuthorizationProvider = ({ children }) => {
    const existingUser = localStorage.getItem("user") || null;
    const [admin, setUser] = useState(existingUser);

    function registerUser(username) {
        localStorage.setItem("user", username);
        setUser(username);
    }

    function registerPassword(password) {
        localStorage.setItem("password", JSON.stringify(password));
        setUser(password);
    }

    function logout() {
        setUser(null);
        localStorage.removeItem("user");
        localStorage.removeItem("password");
    }

    return <Authorization.Provider value={{ admin, registerUser, registerPassword, logout }}>{children}</Authorization.Provider>;
};

export { Authorization, AuthorizationProvider };