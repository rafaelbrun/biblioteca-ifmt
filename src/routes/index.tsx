import React from 'react';

import { useAuth } from 'src/contexts/auth';

import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';

const Routes: React.FC = () => {
  const { login } = useAuth();

  return login ? <AppRoutes /> : <AuthRoutes />;
};

export default Routes;
