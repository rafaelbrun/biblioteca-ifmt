import React, { useCallback, useEffect, useState } from 'react';
import { Alert, Text, TouchableOpacity, View } from 'react-native';

import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';

import AppHeader from 'src/components/AppHeader';
import AppStatusBar from 'src/components/AppStatusBar';
import { useAuth } from 'src/contexts/auth';
import { IExemplar } from 'src/interfaces/IExemplar';
import { IReserva } from 'src/interfaces/IReserva';
import { getAllReservas } from 'src/services/discente-service';
import { removerReserva } from 'src/services/exemplares-service';

import styles from './styles';

const Reservas: React.FC = () => {
  const [reservas, setReservas] = useState([] as IReserva[]);
  const { user } = useAuth();
  const navigation = useNavigation();

  const navigateBack = (): void => {
    navigation.goBack();
  };

  const handleAlertRemoverReserva = useCallback(
    async (indexReserva: number, idExemplar: number) => {
      await removerReserva(user.id, idExemplar);
      setReservas(reservas.filter((_, index) => index !== indexReserva));
    },
    [reservas, user.id],
  );

  const handleRemoverReserva = useCallback(
    async (index: number, exemplar: IExemplar) => {
      Alert.alert(
        'Remover',
        `Deseja retirar o interesse do livro ${exemplar.titulo}?`,
        [
          {
            style: 'destructive',
            text: 'Cancelar',
          },
          {
            onPress: async () => {
              handleAlertRemoverReserva(index, exemplar.id);
            },
            style: 'cancel',
            text: 'Sim',
          },
        ],
        { cancelable: false },
      );
    },
    [handleAlertRemoverReserva],
  );

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      const reservass = (await getAllReservas(user.id)).data.data;
      if (reservass.length > 0) {
        setReservas(reservass);
      }
    };
    fetchData();
  }, [user.id]);

  return (
    <View style={styles.container}>
      <AppStatusBar />
      <AppHeader title={'Reservas'} onPress={navigateBack} />
      {reservas.length > 0 ? (
        <View style={styles.body}>
          <ScrollView showsVerticalScrollIndicator={false}>
            {reservas.map((reserva, index) => {
              return (
                <View key={index}>
                  <View style={styles.itemContainer}>
                    <View>
                      <Text style={styles.itemText}>
                        {reserva.exemplar.titulo}
                      </Text>
                      <Text style={styles.itemDateText}>
                        {`Devolução até ${reserva.validade}`}
                      </Text>
                    </View>

                    <TouchableOpacity
                      onPress={() => {
                        handleRemoverReserva(index, reserva.exemplar);
                      }}
                    >
                      <Feather color={'red'} name={'x'} size={24} />
                    </TouchableOpacity>
                  </View>
                  {index + 1 !== reservas.length ? (
                    <View style={styles.divisor} />
                  ) : (
                    <View />
                  )}
                </View>
              );
            })}
          </ScrollView>
        </View>
      ) : (
        <View style={styles.body}>
          <Text style={[styles.semReservasText, styles.itemText]}>
            {'Você ainda não possui reservas'}
          </Text>
        </View>
      )}
    </View>
  );
};

export default Reservas;
