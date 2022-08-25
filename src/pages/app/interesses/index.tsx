import React, { useCallback, useEffect, useState } from 'react';
import { Alert, Text, TouchableOpacity, View } from 'react-native';

import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';

import AppHeader from 'src/components/AppHeader';
import AppStatusBar from 'src/components/AppStatusBar';
import { useAuth } from 'src/contexts/auth';
import { IExemplar } from 'src/interfaces/IExemplar';
import {
  getAllInteresses,
  limparAlertas,
  removerInteresse,
} from 'src/services/discente-service';
import { getMultiExemplares } from 'src/services/exemplares-service';

import styles from './styles';

const Interesses: React.FC = () => {
  const { user } = useAuth();
  const [exemplares, setExemplares] = useState([] as IExemplar[]);
  const [alertas, setAlertas] = useState([] as IExemplar[]);

  const navigation = useNavigation();

  const getInteresses = useCallback(async (): Promise<void> => {
    const discente = (await getAllInteresses(user.id)).data.data;
    const reqInteresses = discente.interesse;
    const reqAlertas = discente.alertas;

    if (reqInteresses) {
      const convertedInteresses = reqInteresses.split(',').map((interesse) => {
        return Number(interesse);
      });
      const multiExemplares = (await getMultiExemplares(convertedInteresses))
        .data.data;
      setExemplares(multiExemplares);
    }
    if (reqAlertas) {
      const convertedAlertas = reqAlertas.split(',').map((alerta) => {
        return Number(alerta);
      });
      const multiExemplares = (await getMultiExemplares(convertedAlertas)).data
        .data;
      setAlertas(multiExemplares);
    } else {
      setAlertas([]);
    }
  }, [user.id]);

  useEffect(() => {
    getInteresses();
  }, [getInteresses]);

  const limparAvisos = useCallback(async () => {
    await limparAlertas(user.id);
    await getInteresses();
  }, [getInteresses, user.id]);

  const handleLimparAvisos = useCallback(() => {
    Alert.alert(
      'Limpar',
      'Deseja limpar todos os avisos?',
      [
        {
          style: 'destructive',
          text: 'Cancelar',
        },
        {
          onPress: limparAvisos,
          style: 'cancel',
          text: 'Sim',
        },
      ],
      { cancelable: false },
    );
  }, [limparAvisos]);

  const handleRemoveInteresse = (
    idExemplar: number,
    index: number,
    title: string,
  ): void => {
    Alert.alert(
      'Remover',
      `Deseja retirar o interesse do livro ${title}?`,
      [
        {
          style: 'destructive',
          text: 'Cancelar',
        },
        {
          onPress: () => {
            removeInteresse(index, idExemplar);
          },
          style: 'cancel',
          text: 'Sim',
        },
      ],
      { cancelable: false },
    );
  };

  const removeInteresse = async (
    indexInteresse: number,
    idExemplar: number,
  ): Promise<void> => {
    await removerInteresse(user.id, idExemplar);
    setExemplares(exemplares.filter((_, index) => index !== indexInteresse));
  };

  return (
    <View style={styles.container}>
      <AppStatusBar />
      <AppHeader title={'Interesses'} onPress={navigation.goBack} />
      <View style={styles.body}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>{'Exemplares com Interesse'}</Text>
        </View>
        {exemplares.length > 0 ? (
          <ScrollView showsVerticalScrollIndicator={false}>
            {exemplares.map((exemplar, index) => {
              return (
                <View key={index}>
                  <View style={styles.itemContainer}>
                    <View style={styles.exemplarContainer}>
                      <Text style={styles.titleExemplar}>
                        {exemplar.titulo}
                      </Text>
                      <Text style={styles.autorExemplar}>{exemplar.autor}</Text>
                    </View>
                    <TouchableOpacity
                      hitSlop={{ bottom: 30, left: 30, right: 30, top: 30 }}
                      style={styles.removeButtonContainer}
                      onPress={() => {
                        handleRemoveInteresse(
                          exemplar.id,
                          index,
                          exemplar.titulo,
                        );
                      }}
                    >
                      <Feather color={'red'} name={'x'} size={18} />
                    </TouchableOpacity>
                  </View>
                  {index + 1 !== exemplares.length ? (
                    <View style={styles.divisor} />
                  ) : (
                    <View />
                  )}
                </View>
              );
            })}
          </ScrollView>
        ) : (
          <View style={styles.body}>
            <Text style={[styles.semInteressesText, styles.titleExemplar]}>
              {'Você não possui interesses'}
            </Text>
          </View>
        )}
      </View>
      <View style={styles.body}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>{'Avisos de Interesse'}</Text>
          <TouchableOpacity onPress={handleLimparAvisos}>
            <Text style={styles.limparText}>{'Limpar'}</Text>
          </TouchableOpacity>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          {alertas.map((alerta, index) => {
            return (
              <View key={index}>
                <View style={styles.itemContainer}>
                  <View style={styles.exemplarContainer}>
                    <Text style={styles.titleNotificao}>
                      {`O livro ${alerta.titulo} ficou disponível!`}
                    </Text>
                  </View>
                </View>
                {index + 1 !== alertas.length ? (
                  <View style={styles.divisor} />
                ) : (
                  <View />
                )}
              </View>
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
};

export default Interesses;
