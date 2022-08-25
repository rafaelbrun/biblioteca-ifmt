import React from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';

import { AntDesign, Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import AppStatusBar from 'src/components/AppStatusBar';
import { useAuth } from 'src/contexts/auth';

import styles from './styles';

const Profile: React.FC = () => {
  const { signOut, user } = useAuth();
  const navigation = useNavigation();

  const handleDeslogar = (): void => {
    Alert.alert(
      'Sair',
      'Deseja deslogar?',
      [
        {
          style: 'cancel',
          text: 'Cancelar',
        },
        {
          onPress: () => {
            signOut();
          },
          style: 'destructive',
          text: 'Sim',
        },
      ],
      { cancelable: false },
    );
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const navigateTo = (key: any): void => {
    navigation.navigate(key);
  };

  return (
    <View style={styles.container}>
      <AppStatusBar />
      <View>
        <View style={styles.header}>
          <Text style={styles.userNome}>{user.nome}</Text>
          <Text style={styles.userMatricula}>{user.matricula}</Text>
        </View>
        <View style={styles.body}>
          <TouchableOpacity
            onPress={() => {
              navigateTo('Reservas');
            }}
          >
            <View style={styles.itemContainer}>
              <AntDesign color={'black'} name={'book'} size={20} />
              <Text style={styles.itemText}>{'Reservas'}</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.divisor} />
          <TouchableOpacity
            onPress={() => {
              navigateTo('Interesses');
            }}
          >
            <View style={styles.itemContainer}>
              <AntDesign color={'black'} name={'infocirlceo'} size={20} />
              <Text style={styles.itemText}>{'Interesses'}</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.divisor} />
          <TouchableOpacity onPress={handleDeslogar}>
            <View style={styles.itemContainer}>
              <Ionicons color={'red'} name={'ios-exit-outline'} size={20} />
              <Text style={[styles.itemText, styles.redText]}>{'Sair'}</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Profile;
