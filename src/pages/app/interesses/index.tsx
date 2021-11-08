import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Alert, Text, TouchableOpacity, View } from "react-native";
import { ScrollView } from 'react-native-gesture-handler';
import AppHeader from '../../../components/AppHeader';
import AppStatusBar from "../../../components/AppStatusBar";
import styles from './styles';
import { Feather } from '@expo/vector-icons';
import { INotificaoExemplar } from '../../../interfaces/INotificacaoInteresse';
import { IExemplar } from '../../../interfaces/IExemplar';

export default function Interesses() {

    const [exemplares, setExemplares] = useState([] as IExemplar[]);

    var notificacoes: INotificaoExemplar[] = [];

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
                {exemplares.length > 0 ?
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
                    : <View style={styles.body}>
                        <Text style={[styles.semInteressesText, styles.titleExemplar]}>Você não possui interesses</Text>
                    </View>
                }
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