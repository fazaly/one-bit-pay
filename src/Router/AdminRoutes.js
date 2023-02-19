import React from 'react';
import useAdmin from '../Hooks/useAdmin';
import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useGetUserLoggedinDetailsQuery } from '../features/api/apiSlice';
import Spinner from '../Components/Spinner/Spinner';

const AdminRoutes = ({ children }) => {
    const email = useSelector(state => state.auth.email);
    const { data, isLoading, isSuccess } = useGetUserLoggedinDetailsQuery(email);
    const userDetails = data?.data

    // const [isAdmin, isAdminLoading] = useAdmin(user?.userEmail);
    const location = useLocation();

    if (isLoading) {
        return <div className='flex justify-center items-center'>
            <Spinner></Spinner>
        </div>
    }

    if (email && userDetails?.role === 'admin') {
        return children;
    }
    return <Navigate to='/adminForbidden' state={{ from: location }} replace></Navigate>;

};

export default AdminRoutes;