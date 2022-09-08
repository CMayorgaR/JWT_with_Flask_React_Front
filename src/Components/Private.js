
//REACT 5.3 REACT ROUTER DOM
/* import { Route, Routes, Navigate } from "react-router-dom";

const Private = ({component: Component, otherProps}) => {    
    const isAuth= localStorage.getItem("isAuth")
    return 
        <Route {...otherProps } render={ (props)=> isAuth ? <Component {...props}/> : <Navigate to="/log_in"/>} />
};


export default Private; */

import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';

function Private({ children }) {

    const [auth, setAuth] = useState(localStorage.getItem('token'))

    console.log('authprivate', auth)
    return auth ? children : <Navigate to="/log_in" />;
}

export default Private;