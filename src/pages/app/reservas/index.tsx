import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Text, View } from "react-native";
import { ScrollView } from 'react-native-gesture-handler';
import AppHeader from '../../../components/AppHeader';
import AppStatusBar from "../../../components/AppStatusBar";
import { useAuth } from '../../../contexts/auth';
import { IReserva } from '../../../interfaces/IReserva';
import { getAllReservas } from '../../../services/exemplares-service';
import styles from './styles';

export default function Reservas() {

    const [reservas, setReservas] = useState([] as IReserva[]);
    const { user } = useAuth();
    const [isLoading, setIsLoading] = useState(true);
    const navigation = useNavigation();

    function navigateBack() {
        navigation.goBack();
    }

    useEffect(() => {
        const fetchData = async () => {
            const reservass = (await getAllReservas(user.id)).data.data;
            if (reservass.length > 0) setReservas(reservass);
            setIsLoading(false);
        }
        fetchData();

    }, [isLoading]);

    return (
        <View style={styles.container}>
            <AppStatusBar></AppStatusBar>
            <AppHeader onPress={navigateBack} title='Reservas'></AppHeader>
            {reservas.length > 0 ?
                <View style={styles.body}>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        {reservas.map((reserva, index) => {
                            return (
                                <View key={index}>
                                    <View style={styles.itemContainer}>
                                        <Text style={styles.itemText}>{reserva.exemplar.titulo}</Text>
                                        <Text style={styles.itemDateText}>Entrega até {reserva.validade}</Text>
                                    </View>
                                    {index + 1 != reservas.length ? <View style={styles.divisor}></View> : <View></View>}
                                </View>
                            );
                        })}
                    </ScrollView>
                </View>
                :
                <View style={styles.body}>
                    <Text style={[styles.semReservasText, styles.itemText]}>Você ainda não possui reservas</Text>
                </View>
            }
        </View>
    );
}