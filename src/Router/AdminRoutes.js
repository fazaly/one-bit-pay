import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthProvider'
import useAdmin from '../Hooks/useAdmin';
import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useGetUserLoggedinDetailsQuery } from '../features/api/apiSlice';
import Spinner from '../Components/Spinner/Spinner';

const AdminRoutes = ({ children }) => {
    const email = useSelector(state => state.auth.email);
    const { data, isLoading, isSuccess } = useGetUserLoggedinDetailsQuery(email);
    const userDetails = data?.data

    // const { user, loading } = useContext(AuthContext);
    // const [isAdmin, isAdminLoading] = useAdmin(user?.userEmail);
    const location = useLocation();

    if (isLoading) {
        return <Spinner></Spinner>
    }

    if (email && userDetails?.role === 'admin') {
        return children;
    }
    return <Navigate to='/adminForbidden' state={{ from: location }} replace></Navigate>;

};

export default AdminRoutes;