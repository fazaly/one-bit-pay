import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router';
import { useGetUsersRoleQuery } from '../features/api/apiSlice';

const AgentRoutes = ({ children }) => {
    const email = useSelector((state) => state.auth.email);
    const { data } = useGetUsersRoleQuery(email);
    const isLoading = useSelector((state) => state.auth.isLoading);
    const location = useLocation();

    if (isLoading || data?.userRole !== "agent") {
        return <div>Loading...</div>;
    }

    if (email || data?.userRole === "agent") {
        return children;
    }

    return <Navigate to={'/login'} state={{ from: location }} replace></Navigate>
};

export default AgentRoutes;