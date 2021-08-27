import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View } from "react-native";
import { ScrollView } from 'react-native-gesture-handler';
import AppHeader from '../../../components/AppHeader';
import AppStatusBar from "../../../components/AppStatusBar";
import styles from './styles';

export default function Alertas() {

	const navigation = useNavigation();

    function navigateBack() {
        navigation.goBack();
    }

    return (
        <View style={styles.container}>
            <AppStatusBar></AppStatusBar>
            <View>
                <AppHeader onPress={navigateBack} title='Alertas'></AppHeader>
                <View style={styles.body}>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        
                    </ScrollView>
                </View>
            </View>
        </View>
    );
}