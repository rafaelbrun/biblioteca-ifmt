import React, { useCallback } from 'react';

import { AntDesign } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ParamListBase, RouteProp } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Configuracoes from 'src/pages/app/configuracoes';
import Interesses from 'src/pages/app/interesses';
import Main from 'src/pages/app/main';
import Profile from 'src/pages/app/profile';
import Reservas from 'src/pages/app/reservas';

const ProfileStack = createStackNavigator();

const ProfileStackScreen: React.ComponentType = () => {
  return (
    <ProfileStack.Navigator screenOptions={{ headerShown: false }}>
      <ProfileStack.Screen component={Profile} name={'Home'} />
      <ProfileStack.Screen component={Interesses} name={'Interesses'} />
      <ProfileStack.Screen component={Reservas} name={'Reservas'} />
      <ProfileStack.Screen component={Configuracoes} name={'Configuracoes'} />
    </ProfileStack.Navigator>
  );
};

const Tab = createBottomTabNavigator();

const AppRoutes: React.FC = () => {
  const generateTabBarIcon = useCallback(
    (route: RouteProp<ParamListBase, string>, color: string): JSX.Element => {
      let iconName: 'home' | 'profile' = 'home';
      if (route.name === 'Perfil') {
        iconName = 'profile';
      }

      return <AntDesign color={color} name={iconName} size={24} />;
    },
    [],
  );

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color }) => {
          return generateTabBarIcon(route, color);
        },
        tabBarLabelStyle: { fontSize: 14, marginBottom: 6 },
        tabBarStyle: { height: 60 },
      })}
    >
      <Tab.Screen component={Main} name={'Inicio'} />
      <Tab.Screen component={ProfileStackScreen} name={'Perfil'} />
    </Tab.Navigator>
  );
};

export default AppRoutes;
