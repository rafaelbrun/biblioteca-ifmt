import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { gray } from '../pages/geral/styles';

const AppHeader = ({ onPress, title }: any) => (
  <View style={styles.header}>
    <TouchableOpacity onPress={onPress} style={styles.backButtonContainer}>
      <Ionicons name="arrow-back" size={20} color={gray} />
    </TouchableOpacity>
    <Text style={styles.headerText}>{title}</Text>
  </View>
);

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButtonContainer: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    color: gray,
    fontSize: 18,
    letterSpacing: 1,
    marginLeft: 12,
  },
});

export default AppHeader;
