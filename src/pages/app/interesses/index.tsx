import React, { useEffect, useState } from 'react';
import { Alert, Text, TouchableOpacity, View } from 'react-native';

import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';

import AppHeader from 'src/components/AppHeader';
import AppStatusBar from 'src/components/AppStatusBar';
import { IExemplar } from 'src/interfaces/IExemplar';
import { INotificaoExemplar } from 'src/interfaces/INotificacaoInteresse';
import { getAllInteresses } from 'src/services/discente-service';
import { getMultiExemplares } from 'src/services/exemplares-service';

import styles from './styles';

const Interesses: React.FC = () => {
  const [exemplares, setExemplares] = useState([] as IExemplar[]);

  const notificacoes: INotificaoExemplar[] = [];

  const navigation = useNavigation();

  useEffect(() => {
    const getInteresses = async (): Promise<void> => {
      const reqInteresses = (await getAllInteresses(1)).data.data.interesse;
      if (reqInteresses) {
        const convertedInteresses = reqInteresses
          .split(',')
          .map((interesse) => {
            return Number(interesse);
          });
        const multiExemplares = (await getMultiExemplares(convertedInteresses))
          .data.data;
        setExemplares(multiExemplares);
      }
    };
    getInteresses();
  }, []);

  const navigateBack = (): void => {
    navigation.goBack();
  };

  const handleRemoveInteresse = (index: number, title: string): void => {
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
            removeInteresse(index);
          },
          style: 'cancel',
          text: 'Sim',
        },
      ],
      { cancelable: false },
    );
  };

  const removeInteresse = (indexInteresse: number): void => {
    setExemplares(exemplares.filter((_, index) => index !== indexInteresse));
  };

  return (
    <View style={styles.container}>
      <AppStatusBar />
      <AppHeader title={'Interesses'} onPress={navigateBack} />
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
                      style={styles.removeButtonContainer}
                      onPress={() => {
                        handleRemoveInteresse(index, exemplar.titulo);
                      }}
                    >
                      <Feather color={'red'} name={'x'} size={24} />
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
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          {notificacoes.map((notificao, index) => {
            return (
              <View key={index}>
                <View style={styles.itemContainer}>
                  <View style={styles.exemplarContainer}>
                    <Text style={styles.titleNotificao}>
                      {`O livro ${notificao.exemplar.titulo} ficou disponível!`}
                    </Text>
                    <Text style={styles.dataNotificao}>
                      {`${notificao.dataNotificacao}`}
                    </Text>
                  </View>
                </View>
                {index + 1 !== notificacoes.length ? (
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
