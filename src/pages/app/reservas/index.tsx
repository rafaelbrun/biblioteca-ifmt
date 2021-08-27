import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, TouchableOpacity, View } from "react-native";
import { ScrollView } from 'react-native-gesture-handler';
import AppHeader from '../../../components/AppHeader';
import AppStatusBar from "../../../components/AppStatusBar";
import { IReserva } from '../../../interfaces/IReserva';
import { gray } from '../../geral/styles';
import styles from './styles';

export default function Reservas() {

    const reservas: IReserva[] = [
        {
            id: 1,
            exemplar: {
                id: 1,
                disponivel: true,
                autor: 'Silvio Cesar Roxo Giavaroto',
                edicao: '1ª',
                editora: 'Ciência Moderna',
                titulo: 'Kali Linux. Introdução ao Penetration Testing'
            },
            validade: '22/11/2022'
        },
        {
            id: 2,
            exemplar: {
                id: 3,
                disponivel: true,
                autor: 'Celmo Celeno PORTO',
                edicao: '8ª',
                editora: 'Guanabara Koogan',
                titulo: 'Semiologia Médica'
            },
            validade: '01/11/2022'
        },
        {
            id: 3,
            exemplar: {
                id: 5,
                disponivel: true,
                autor: 'Rafael',
                edicao: '31ª',
                editora: 'Editora Saraiva',
                titulo: 'Vade Mecum Saraiva Tradicional'
            },
            validade: '11/11/2022'
        },
        {
            id: 2,
            exemplar: {
                id: 3,
                disponivel: true,
                autor: 'Celmo Celeno PORTO',
                edicao: '8ª',
                editora: 'Guanabara Koogan',
                titulo: 'Semiologia Médica'
            },
            validade: '01/11/2022'
        },
        {
            id: 3,
            exemplar: {
                id: 5,
                disponivel: true,
                autor: 'Rafael',
                edicao: '31ª',
                editora: 'Editora Saraiva',
                titulo: 'Vade Mecum Saraiva Tradicional'
            },
            validade: '11/11/2022'
        },
        {
            id: 2,
            exemplar: {
                id: 3,
                disponivel: true,
                autor: 'Celmo Celeno PORTO',
                edicao: '8ª',
                editora: 'Guanabara Koogan',
                titulo: 'Semiologia Médica'
            },
            validade: '01/11/2022'
        },
        {
            id: 3,
            exemplar: {
                id: 5,
                disponivel: true,
                autor: 'Rafael',
                edicao: '31ª',
                editora: 'Editora Saraiva',
                titulo: 'Vade Mecum Saraiva Tradicional'
            },
            validade: '11/11/2022'
        },
        {
            id: 2,
            exemplar: {
                id: 3,
                disponivel: true,
                autor: 'Celmo Celeno PORTO',
                edicao: '8ª',
                editora: 'Guanabara Koogan',
                titulo: 'Semiologia Médica'
            },
            validade: '01/11/2022'
        },
        {
            id: 3,
            exemplar: {
                id: 5,
                disponivel: true,
                autor: 'Rafael',
                edicao: '31ª',
                editora: 'Editora Saraiva',
                titulo: 'Vade Mecum Saraiva Tradicional'
            },
            validade: '11/11/2022'
        },
        {
            id: 2,
            exemplar: {
                id: 3,
                disponivel: true,
                autor: 'Celmo Celeno PORTO',
                edicao: '8ª',
                editora: 'Guanabara Koogan',
                titulo: 'Semiologia Médica'
            },
            validade: '01/11/2022'
        },
        {
            id: 3,
            exemplar: {
                id: 5,
                disponivel: true,
                autor: 'Rafael',
                edicao: '31ª',
                editora: 'Editora Saraiva',
                titulo: 'Vade Mecum Saraiva Tradicional'
            },
            validade: '11/11/2022'
        },
        {
            id: 2,
            exemplar: {
                id: 3,
                disponivel: true,
                autor: 'Celmo Celeno PORTO',
                edicao: '8ª',
                editora: 'Guanabara Koogan',
                titulo: 'Semiologia Médica'
            },
            validade: '01/11/2022'
        },
        {
            id: 3,
            exemplar: {
                id: 5,
                disponivel: true,
                autor: 'Rafael',
                edicao: '31ª',
                editora: 'Editora Saraiva',
                titulo: 'Vade Mecum Saraiva Tradicional'
            },
            validade: '11/11/2022'
        },
    ]

	const navigation = useNavigation();

    function navigateBack() {
        navigation.goBack();
    }

    return (
        <View style={styles.container}>
            <AppStatusBar></AppStatusBar>
            <View>
                <AppHeader onPress={navigateBack} title='Reservas'></AppHeader>
                <View style={styles.body}>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        {reservas.map((reserva, index) => {
                            return (
                                <View>
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
            </View>
        </View>
    );
}