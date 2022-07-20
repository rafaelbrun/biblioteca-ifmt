import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';
import AppStatusBar from '../../../components/AppStatusBar';
import AppHeader from '../../../components/AppHeader';
import { useNavigation } from '@react-navigation/native';

export default function Configuracoes() {
  const navigation = useNavigation();

  function navigateBack() {
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <AppStatusBar></AppStatusBar>
      <AppHeader onPress={navigateBack} title="Configurações"></AppHeader>
    </View>
  );
}
