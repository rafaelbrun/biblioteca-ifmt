import React from 'react';
import { StyleSheet, View, Platform, StatusBar } from 'react-native';
import { gray } from '../pages/geral/styles';

const AppStatusBar = ({ backgroundColor }: any) => (
  <View
    style={[styles.statusBarBackground, backgroundColor && { backgroundColor }]}
  ></View>
);

const styles = StyleSheet.create({
  statusBarBackground: {
    height: Platform.OS === 'ios' ? 20 : StatusBar.currentHeight,
    backgroundColor: Platform.OS === 'ios' ? gray : 'white',
  },
});

export default AppStatusBar;
