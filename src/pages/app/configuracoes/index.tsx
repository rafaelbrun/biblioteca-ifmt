import React from 'react';
import { Text, View } from "react-native";
import styles from './styles';
import AppStatusBar from "../../../components/AppStatusBar";

export default function Configuracoes() {
    return (
        <View style={styles.container}>
            <AppStatusBar></AppStatusBar>
            <Text>Configurações</Text>
        </View>
    )
}