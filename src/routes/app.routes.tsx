import React from 'react';
import Main from '../pages/app/main';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign } from '@expo/vector-icons';
import Profile from '../pages/app/profile';

const Tab = createBottomTabNavigator();

const AppRoutes: React.FC = () => (
    <Tab.Navigator screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
            let iconName: any;

            switch (route.name) {
                case 'Inicio':
                    iconName = 'home';
                    break;
                case 'Perfil':
                    iconName = 'profile';
                    break;
                default:
                    iconName = 'home';
                    break;
            }

            return <AntDesign name={iconName} size={24} color="black" />;
        },
        headerShown: false,
        tabBarLabelStyle: { marginBottom: 6, fontSize: 14 },
        tabBarStyle: { height: 60 },
    })}>
        <Tab.Screen name="Inicio" component={Main} />
        <Tab.Screen name="Perfil" component={Profile} />
    </Tab.Navigator>
);

export default AppRoutes;