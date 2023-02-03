import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthProvider'
import useAdmin from '../hooks/useAdmin';
import { Navigate, useLocation } from 'react-router-dom';

const AdminRoutes = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const [isAdmin, isAdminLoading] = useAdmin(user?.userEmail);
    const location = useLocation();

    if(loading || isAdminLoading) {
        return <p>Loading Loading Loading</p>
    }

    if(user && isAdmin) {
        return children;
    }
    return <Navigate to='/login' state={{from: location}} replace></Navigate>;

};

export default AdminRoutes;