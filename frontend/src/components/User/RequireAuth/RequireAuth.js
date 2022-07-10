import React, { useEffect, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../../../firebase';

const RequireAuth = ({ children }) => {
    const [currentUser, setCurrentUser] = useState({})
    const location = useLocation()

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {

                setCurrentUser(user);
                console.log(user)
            } else {
                setCurrentUser({});
            }
        });
    }, [])


    if (!currentUser) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children;
};

export default RequireAuth;