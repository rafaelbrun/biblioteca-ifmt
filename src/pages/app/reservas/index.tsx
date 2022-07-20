import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';

import AppHeader from 'src/components/AppHeader';
import AppStatusBar from 'src/components/AppStatusBar';
import { useAuth } from 'src/contexts/auth';
import { IReserva } from 'src/interfaces/IReserva';
import { getAllReservas } from 'src/services/exemplares-service';

import styles from './styles';

const Reservas: React.FC = () => {
  const [reservas, setReservas] = useState([] as IReserva[]);
  const { user } = useAuth();
  const [isLoading, setIsLoading] = useState(true);
  const navigation = useNavigation();

  const navigateBack = (): void => {
    navigation.goBack();
  };

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      const reservass = (await getAllReservas(user.id)).data.data;
      if (reservass.length > 0) {
        setReservas(reservass);
      }
      setIsLoading(false);
    };
    fetchData();
  }, [isLoading, user.id]);

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
                    <Text style={styles.itemText}>
                      {reserva.exemplar.titulo}
                    </Text>
                    <Text style={styles.itemDateText}>
                      {`Entrega até ${reserva.validade}`}
                    </Text>
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
