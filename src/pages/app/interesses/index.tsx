import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Alert, Text, TouchableOpacity, View } from "react-native";
import { ScrollView } from 'react-native-gesture-handler';
import AppHeader from '../../../components/AppHeader';
import AppStatusBar from "../../../components/AppStatusBar";
import styles from './styles';
import { Feather } from '@expo/vector-icons';
import { INotificaoExemplar } from '../../../interfaces/INotificacaoInteresse';

export default function Interesses() {

    const [exemplares, setExemplares] = useState(
        [
            {
                id: 1,
                disponivel: true,
                autor: 'Silvio Cesar Roxo Giavaroto',
                edicao: '1ª',
                editora: 'Ciência Moderna',
                titulo: 'Kali Linux. Introdução ao Penetration Testing'
            },
            {
                id: 2,
                disponivel: false,
                autor: 'Robert C. Martin',
                edicao: '1ª',
                editora: 'Alta Books',
                titulo: 'Código limpo: Habilidades práticas do Agile Software'
            },
            {
                id: 3,
                disponivel: true,
                autor: 'Celmo Celeno PORTO',
                edicao: '8ª',
                editora: 'Guanabara Koogan',
                titulo: 'Semiologia Médica'
            },
            {
                id: 4,
                disponivel: false,
                autor: 'Maurice Leblanc',
                edicao: '1ª',
                editora: 'Pandorga Editora',
                titulo: 'Arsène Lupin: O Ladrão de Casaca'
            },
            {
                id: 5,
                disponivel: true,
                autor: 'Rafael',
                edicao: '31ª',
                editora: 'Editora Saraiva',
                titulo: 'Vade Mecum Saraiva Tradicional'
            },
            {
                id: 6,
                disponivel: true,
                autor: 'Guaracy Moreira Filho',
                edicao: '11ª',
                editora: 'Rideel',
                titulo: 'Código Penal Comentado'
            },
            {
                id: 7,
                disponivel: false,
                autor: 'Carol H. Collins',
                edicao: '1ª',
                editora: 'Editora da Unicamp',
                titulo: 'Fundamentos de Cromatografia'
            },
            {
                id: 8,
                disponivel: true,
                autor: 'Angelo Machado',
                edicao: '3ª',
                editora: 'Editora Atheneu',
                titulo: 'Neuroanatomia funcional'
            },
            {
                id: 9,
                disponivel: true,
                autor: 'Ilana Zeitoune ',
                edicao: '1ª',
                editora: 'Editora Forense',
                titulo: 'Petróleo e Gás no Brasil - Regulação da Exploração e da Produção'
            },
            {
                id: 10,
                disponivel: true,
                autor: 'Orlando Gomes',
                edicao: '22º',
                editora: 'Editora Forense',
                titulo: 'Introdução ao Direito Civil'
            },
            {
                id: 11,
                disponivel: true,
                autor: 'Trevos Kletz',
                edicao: '5ª',
                editora: 'Interciência',
                titulo: 'O que Houve de Errado?'
            },
            {
                id: 1,
                disponivel: true,
                autor: 'José Hernandez Perez Júnior',
                edicao: '11ª',
                editora: 'Atlas',
                titulo: 'Controladoria Estratégica: Textos E Casos Práticos Com Solução'
            },
            {
                id: 13,
                disponivel: true,
                autor: 'Mathias Jr. Wilson',
                edicao: '1ª',
                editora: 'Editora Manole',
                titulo: 'Mathias - ecocardiografia para o dia a dia'
            },
        ]
    );

    const notificacoes: INotificaoExemplar[] = [
        {
            id: 1,
            titulo: 'Kali Linux. Introdução ao Penetration Testing',
            dataNotificacao: '23/01/2022'
        },
        {
            id: 1,
            titulo: 'Semiologia Médica',
            dataNotificacao: '07/05/2022'
        },
        {
            id: 1,
            titulo: 'Neuroanatomia funcional',
            dataNotificacao: '08/03/2022'
        },
        {
            id: 1,
            titulo: 'O que Houve de Errado?',
            dataNotificacao: '11/10/2022'
        },
        {
            id: 1,
            titulo: 'Mathias - ecocardiografia para o dia a dia',
            dataNotificacao: '11/11/2022'
        },
        {
            id: 1,
            titulo: 'Fundamentos de Cromatografia',
            dataNotificacao: '05/01/2022'
        },
    ]

    const navigation = useNavigation();

    function navigateBack() {
        navigation.goBack();
    }

    function handleRemoveInteresse(index: number, title: string) {
        Alert.alert(
            'Remover',
            `Deseja retirar o interesse do livro ${title}?`,
            [
                {
                    text: 'Cancelar',
                    style: 'destructive'
                },
                {
                    text: 'Sim', onPress: () => {
                        removeInteresse(index);
                    },
                    style: 'cancel'
                }
            ],
            { cancelable: false }
        );
    }

    function removeInteresse(indexInteresse: number) {
        setExemplares(exemplares.filter((_, index) => index != indexInteresse));
    }

    return (
        <View style={styles.container}>
            <AppStatusBar></AppStatusBar>
            <AppHeader onPress={navigateBack} title='Interesses'></AppHeader>
            <View style={styles.body}>
                <View style={styles.titleContainer}>
                    <Text style={styles.titleText}>Exemplares com Interesse</Text>
                </View>
                <ScrollView showsVerticalScrollIndicator={false}>
                    {exemplares.map((exemplar, index) => {
                        return (
                            <View key={index}>
                                <View style={styles.itemContainer} >
                                    <View style={styles.exemplarContainer}>
                                        <Text style={styles.titleExemplar}>{exemplar.titulo}</Text>
                                        <Text style={styles.autorExemplar}>{exemplar.autor}</Text>
                                    </View>
                                    <TouchableOpacity onPress={() => { handleRemoveInteresse(index, exemplar.titulo) }}
                                        style={styles.removeButtonContainer}>
                                        <Feather name="x" size={24} color="red" />
                                    </TouchableOpacity>
                                </View>
                                {index + 1 != exemplares.length ? <View style={styles.divisor}></View> : <View></View>}
                            </View>
                        );
                    })}
                </ScrollView>
            </View>
            <View style={styles.body}>
                <View style={styles.titleContainer}>
                    <Text style={styles.titleText}>Notificações de Interesse</Text>
                </View>
                <ScrollView showsVerticalScrollIndicator={false}>
                    {notificacoes.map((notificao, index) => {
                        return (
                            <View key={index}>
                                <View style={styles.itemContainer} >
                                    <View style={styles.exemplarContainer}>
                                        <Text style={styles.titleNotificao}>O livro {notificao.titulo} ficou disponível!</Text>
                                        <Text style={styles.dataNotificao}>{notificao.dataNotificacao}</Text>
                                    </View>
                                </View>
                                {index + 1 != notificacoes.length ? <View style={styles.divisor}></View> : <View></View>}
                            </View>
                        );
                    })}
                </ScrollView>
            </View>
        </View>
    );
}