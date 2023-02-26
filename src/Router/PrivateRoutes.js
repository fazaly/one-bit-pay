import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import LoadingGif from '../Components/LoadingGif/LoadingGif';

const PrivateRoutes = ({children}) => {
    const {email, isOnStateCng} = useSelector((state) => state.auth)
    const location = useLocation();

    if(isOnStateCng){
        return <LoadingGif/>;
    }

    if(email){
        return children ;
    }

    return <Navigate to={'/login'} state={{from: location}} replace></Navigate>
};

export default PrivateRoutes;