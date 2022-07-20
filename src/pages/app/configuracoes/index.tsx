import React from 'react';
import { View } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import AppHeader from 'src/components/AppHeader';
import AppStatusBar from 'src/components/AppStatusBar';

import styles from './styles';

const Configuracoes: React.FC = () => {
  const navigation = useNavigation();

  const navigateBack = (): void => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <AppStatusBar />
      <AppHeader title={'Configurações'} onPress={navigateBack} />
    </View>
  );
};

export default Configuracoes;
