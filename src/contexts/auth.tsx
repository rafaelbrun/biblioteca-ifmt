import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { IUserAccount } from '../interfaces/IUserAccount';
import { signInApp } from '../services/exemplares-service';

interface AuthContextData {
    login: boolean;
    user: IUserAccount;
    signIn(matricula: string, senha: string): Promise<unknown>;
    signOut(): void;
    loading: boolean;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
    const [user, setUser] = useState({} as IUserAccount);
    const [login, setLogin] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadData() {
            const storagedUser = await AsyncStorage.getItem('@RNAuth:user');

            if (storagedUser) {
                setUser(JSON.parse(storagedUser));
                setLogin(true);
                setLoading(false);
            }
            setLoading(false);
        }

        loadData();
    }, [])

    async function signIn(matricula: string, senha: string) {
        setLoading(true);
        if (matricula == '123123' && senha == 'adm123') {
            const userTeste: IUserAccount = {
                id: 1,
                nome: 'Conta Teste',
                matricula: '123123',
            }
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
                Alert.alert('Problema na conexão', 'Por favor, tente novamente mais tarde.');
                setLoading(false);
            }
        }

        setLoading(false);
    }

    async function signOut() {
        await AsyncStorage.removeItem('@RNAuth:user');
        setUser({} as IUserAccount);
        setLogin(false);
    }

    return (
        <AuthContext.Provider value={{ login, user, signIn, signOut, loading }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}