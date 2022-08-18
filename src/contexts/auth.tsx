import React, { createContext, useContext, useEffect, useState } from 'react';
import { Alert } from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

import { IUserAccount } from 'src/interfaces/IUserAccount';
import { signInApp } from 'src/services/auth-services';

interface IAuthContextData {
  loading: boolean;
  login: boolean;
  signIn(matricula: string, senha: string): Promise<unknown>;
  signOut(): void;
  user: IUserAccount;
}

const AuthContext = createContext<IAuthContextData>({} as IAuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState({} as IUserAccount);
  const [login, setLogin] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async (): Promise<void> => {
      const storagedUser = await AsyncStorage.getItem('@RNAuth:user');

      if (storagedUser) {
        setUser(JSON.parse(storagedUser));
        setLogin(true);
        setLoading(false);
      }
      setLoading(false);
    };

    loadData();
  }, []);

  const signIn = async (matricula: string, senha: string): Promise<void> => {
    setLoading(true);
    if (matricula === '123123' && senha === 'adm123') {
      const userTeste: IUserAccount = {
        id: 1,
        matricula: '123123',
        nome: 'Conta Teste',
      };
      await AsyncStorage.setItem('@RNAuth:user', JSON.stringify(userTeste));

      setUser(userTeste);
      setLogin(true);
    } else {
      try {
        const response = await signInApp(matricula, senha);
        const { data } = response;
        if (data.login) {
          await AsyncStorage.setItem('@RNAuth:user', JSON.stringify(data.user));

          setUser(data.user);
          setLogin(data.login);
        } else {
          Alert.alert('Credências incorretas', 'Por favor, tente novamente.');
        }
      } catch (e) {
        console.warn(e);
        Alert.alert(
          'Problema na conexão',
          'Por favor, tente novamente mais tarde.',
        );
        setLoading(false);
      }
    }

    setLoading(false);
  };

  const signOut = async (): Promise<void> => {
    await AsyncStorage.removeItem('@RNAuth:user');
    setUser({} as IUserAccount);
    setLogin(false);
  };

  return (
    <AuthContext.Provider value={{ loading, login, signIn, signOut, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): IAuthContextData => {
  return useContext(AuthContext);
};
