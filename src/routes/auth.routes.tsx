import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import Login from 'src/pages/auth/login';

const AuthStack = createStackNavigator();

const AuthRoutes: React.FC = () => (
  <AuthStack.Navigator screenOptions={{ headerShown: false }}>
    <AuthStack.Screen component={Login} name={'Login'} />
  </AuthStack.Navigator>
);

export default AuthRoutes;
