import React from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom';

const RequiredAuth = ({ children }) => {


    const loggedIn = localStorage.getItem("loggedIn");
    if (loggedIn == "false") {
        return <Navigate to={"/auth/login"}></Navigate >;
    }


    return children;
}

export default RequiredAuth