import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Spinner from '../Components/Spinner/Spinner';
import { AuthContext } from '../context/AuthProvider';

const PrivateRoutes = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();

    if(loading){
        return <Spinner/>;
    }

    if(user && user?.email){
        return children ;
    }

    return <Navigate to={'/login'} state={{from: location}} replace></Navigate>
};

export default PrivateRoutes;