import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { IUserAccount } from '../interfaces/IUserAccount';
import api from '../services/api';
import * as auth from '../services/auth';

interface AuthContextData {
    login: boolean;
    user: IUserAccount;
    signIn(matricula: string, senha: string): Promise<unknown>;
    signOut(): void;
    loading: boolean;
    updateUser(user: IUserAccount): Promise<boolean>;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
    const [user, setUser] = useState({} as IUserAccount);
    const [login, setLogin] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadData() {
            const storagedUser = await AsyncStorage.getItem('@RNAuth:user');
            const storagedToken = await AsyncStorage.getItem('@RNAuth:token');

            if (storagedToken && storagedUser) {
                api.defaults.headers['Authorization'] = `Bearer ${storagedToken}`;
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
        if (matricula == "123123" && senha == "adm123") {
            const userTeste: IUserAccount = {
                nome: "Conta Teste",
                matricula: "123123",
            }
            await AsyncStorage.setItem('@RNAuth:user', JSON.stringify(userTeste));
            await AsyncStorage.setItem('@RNAuth:token', "00000");

            setUser(userTeste);
            setLogin(true);
        } else {
            try {
                const response = await auth.signIn(matricula, senha);
                const { data } = response;
                if (data.login) {
                    api.defaults.headers['Authorization'] = `Bearer ${data.token}`;

                    await AsyncStorage.setItem('@RNAuth:user', JSON.stringify(data.user));
                    await AsyncStorage.setItem('@RNAuth:token', data.token);

                    setUser(data.user);
                    setLogin(data.login);
                } else {
                    Alert.alert("Credências incorretas", "Por favor, tente novamente.");
                }
            } catch (e) {
                console.warn(e);
                Alert.alert("Problema na conexão", "Por favor, tente novamente mais tarde.");
                setLoading(false);
            }
        }

        setLoading(false);
    }

    async function signOut() {
        await AsyncStorage.removeItem('@RNAuth:user');
        await AsyncStorage.removeItem('@RNAuth:token');
        setUser({} as IUserAccount);
        setLogin(false);
    }

    async function updateUser(user: IUserAccount) {
        setLoading(true);
        let success = false;
        try {
            const response = await auth.updateUser(user);
            success = response.data.success;
        } catch (e) {
            console.warn(e);
            Alert.alert("Problema na conexão", "Por favor, tente novamente mais tarde.");
            setLoading(false);
        }
        setLoading(false);
        return success;
    }

    return (
        <AuthContext.Provider value={{ login, user, signIn, signOut, loading, updateUser }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}