import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  GestureResponderEvent,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';

import { gray } from 'src/pages/geral/styles';

export interface IPropsHeader {
  onPress: (event: GestureResponderEvent) => void;
  title: string;
}

const AppHeader: React.FC<IPropsHeader> = ({ onPress, title }) => (
  <View style={styles.header}>
    <TouchableOpacity style={styles.backButtonContainer} onPress={onPress}>
      <Ionicons color={gray} name={'arrow-back'} size={20} />
    </TouchableOpacity>
    <Text style={styles.headerText}>{title}</Text>
  </View>
);

const styles = StyleSheet.create({
  backButtonContainer: {
    alignItems: 'center',
    height: 50,
    justifyContent: 'center',
    width: 50,
  },
  header: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
  },
  headerText: {
    color: gray,
    fontSize: 18,
    letterSpacing: 1,
    marginLeft: 12,
  },
});

export default AppHeader;
