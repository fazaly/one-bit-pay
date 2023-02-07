import React from 'react';
import { useContext } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router';
import { AuthContext } from '../context/AuthProvider';
import useAgent from '../Hooks/useAgent';

const AgentRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext);

    const email = useSelector((state) => state.auth.email);
    const isLoading = useSelector((state) => state.auth.isLoading);

    const [isAgent, agentLoading] = useAgent(email);
    const location = useLocation();

    if (isLoading || agentLoading) {
        return <div>Loading...</div>;
    }

    if (email || isAgent) {
        return children;
    }

    return <Navigate to={'/login'} state={{ from: location }} replace></Navigate>
};

export default AgentRoutes;