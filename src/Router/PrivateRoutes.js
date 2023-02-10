import React from 'react';
import { useContext } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import Spinner from '../Components/Spinner/Spinner';
import { AuthContext } from '../context/AuthProvider';

const PrivateRoutes = ({children}) => {
    const {user,  userDetails, loading} = useContext(AuthContext);

    const email = useSelector((state) => state.auth.email)
    const isLoading = useSelector((state) => state.auth.isLoading)
    const location = useLocation();

    if(isLoading){
        return <Spinner/>;
    }

    if(email){
        return children ;
    }

    return <Navigate to={'/login'} state={{from: location}} replace></Navigate>
};

export default PrivateRoutes;