import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import LoadingGif from '../Components/LoadingGif/LoadingGif';
import Spinner from '../Components/Spinner/Spinner';

const PrivateRoutes = ({children}) => {
    const email = useSelector((state) => state.auth.email)
    const isLoading = useSelector((state) => state.auth.isLoading)
    const location = useLocation();

    if(isLoading){
        return <LoadingGif/>;
    }

    if(email){
        return children ;
    }

    return <Navigate to={'/login'} state={{from: location}} replace></Navigate>
};

export default PrivateRoutes;