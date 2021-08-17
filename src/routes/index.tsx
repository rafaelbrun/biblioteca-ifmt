import React from 'react';
import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';
import { useAuth } from '../contexts/auth';

const Routes: React.FC = () => {
    const { login } = useAuth();
    
    return login ? <AppRoutes /> : <AuthRoutes />;
}

export default Routes;