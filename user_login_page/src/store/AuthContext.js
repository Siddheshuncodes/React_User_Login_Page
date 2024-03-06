import React from "react";
import { useState, useEffect } from "react";

const AuthContext = React.createContext({
    isLoggedIn: false,
    onLogin: (email, password) => { },
    onLogout: () => { },
});


export const AuthContextProvider = (props) => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const storedUserLoggedInformation = localStorage.getItem('arr');
        if (storedUserLoggedInformation === '1') {
            setIsLoggedIn(true);
        }
    }, [])

    const loginHandler = (email, password) => {
        localStorage.setItem('arr', '1');
        setIsLoggedIn(true);
    };

    const logoutHandler = () => {
        localStorage.removeItem('arr');
        setIsLoggedIn(false);
    };


    return <AuthContext.Provider value={
        {
            isLoggedIn: isLoggedIn,
            onLogin: loginHandler,
            onLogout: logoutHandler,
        }
    }>
        {props.children}
    </AuthContext.Provider>
}

export default AuthContext;