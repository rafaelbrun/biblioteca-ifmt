import React from 'react';
import Main from '../pages/app/main';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign } from '@expo/vector-icons';
import Profile from '../pages/app/profile';
import { createStackNavigator } from '@react-navigation/stack';
import Reservas from '../pages/app/reservas';
import Configuracoes from '../pages/app/configuracoes';
import Interesses from '../pages/app/interesses';

const ProfileStack = createStackNavigator();

function ProfileStackScreen() {
  return (
    <ProfileStack.Navigator screenOptions={{ headerShown: false }}>
      <ProfileStack.Screen name="Home" component={Profile} />
      <ProfileStack.Screen name="Interesses" component={Interesses} />
      <ProfileStack.Screen name="Reservas" component={Reservas} />
      <ProfileStack.Screen name="Configuracoes" component={Configuracoes} />
    </ProfileStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

const AppRoutes: React.FC = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ color, size }) => {
        let iconName: any = 'home';
        if (route.name == 'Perfil') {
          iconName = 'profile';
        }

        return <AntDesign name={iconName} size={24} color={color} />;
      },
      headerShown: false,
      tabBarLabelStyle: { marginBottom: 6, fontSize: 14 },
      tabBarStyle: { height: 60 },
    })}
  >
    <Tab.Screen name="Inicio" component={Main} />
    <Tab.Screen name="Perfil" component={ProfileStackScreen} />
  </Tab.Navigator>
);

export default AppRoutes;
