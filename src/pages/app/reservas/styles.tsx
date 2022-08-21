import { StyleSheet } from 'react-native';

import { gray, lightBlue } from 'src/pages/geral/styles';

export default StyleSheet.create({
  body: {
    backgroundColor: 'white',
    height: '90%',
  },
  container: {
    backgroundColor: lightBlue,
    flex: 1,
  },
  divisor: {
    alignSelf: 'center',
    borderBottomWidth: 1,
    borderColor: '#efefef',
    height: 1,
    width: '95%',
  },
  itemContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
  },
  itemDateText: {
    color: gray,
    marginLeft: 12,
  },
  itemText: {
    fontSize: 16,
    letterSpacing: 1.5,
  },
  semReservasText: {
    marginLeft: 24,
    marginTop: 24,
  },
});
