import { StyleSheet } from 'react-native';

import { lightBlue, gray } from 'src/pages/geral/styles';

export default StyleSheet.create({
  body: {
    backgroundColor: 'white',
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
  header: {
    alignItems: 'flex-end',
    padding: 20,
  },
  itemContainer: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    padding: 16,
  },
  itemText: {
    fontSize: 16,
    letterSpacing: 1.5,
    marginLeft: 12,
  },
  redText: {
    color: 'red',
    fontWeight: '300',
  },
  userMatricula: {
    color: '#888',
    fontSize: 14,
    letterSpacing: 1,
    marginLeft: 4,
  },
  userNome: {
    color: gray,
    fontSize: 18,
    letterSpacing: 1,
  },
});
