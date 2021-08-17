import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Main from '../pages/app/main';

const AppStack = createStackNavigator();

const AppRoutes: React.FC = () => (
    <AppStack.Navigator screenOptions={{ headerShown: false }}>
        <AppStack.Screen name="Login" component={Main} />
    </AppStack.Navigator>
);

export default AppRoutes;