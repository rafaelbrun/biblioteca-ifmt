import React from 'react';
import {
  StyleSheet,
  View,
  Platform,
  StatusBar,
  ColorValue,
} from 'react-native';

import { gray } from 'src/pages/geral/styles';

interface IPropsStatusBar {
  backgroundColor?: ColorValue;
}

const AppStatusBar: React.FC<IPropsStatusBar> = ({ backgroundColor }) => (
  <View style={[styles.statusBarBackground, { backgroundColor }]} />
);

const styles = StyleSheet.create({
  statusBarBackground: {
    backgroundColor: Platform.OS === 'ios' ? gray : 'white',
    height: Platform.OS === 'ios' ? 20 : StatusBar.currentHeight,
  },
});

export default AppStatusBar;
