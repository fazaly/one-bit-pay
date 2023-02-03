import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router';
import { AuthContext } from '../context/AuthProvider';
import useAgent from '../Hooks/useAgent';

const AgentRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const [isAgent, agentLoading] = useAgent();
    const location = useLocation();

    if (loading || agentLoading) {
        return <div>Loading...</div>;
    }

    if (user || isAgent) {
        return children;
    }

    return <Navigate to={'/login'} state={{ from: location }} replace></Navigate>
};

export default AgentRoutes;