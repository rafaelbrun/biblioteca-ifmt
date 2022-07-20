import { StyleSheet } from 'react-native';
import { lightBlue, gray } from '../../geral/styles';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: lightBlue,
  },
  header: {
    padding: 20,
    alignItems: 'flex-end',
  },
  userNome: {
    color: gray,
    fontSize: 18,
    letterSpacing: 1,
  },
  userMatricula: {
    marginLeft: 4,
    color: '#888',
    fontSize: 14,
    letterSpacing: 1,
  },
  body: {
    backgroundColor: 'white',
  },
  itemContainer: {
    display: 'flex',
    flexDirection: 'row',
    padding: 16,
    alignItems: 'center',
  },
  itemText: {
    letterSpacing: 1.5,
    marginLeft: 12,
    fontSize: 16,
  },
  redText: {
    color: 'red',
    fontWeight: '300',
  },
  divisor: {
    width: '95%',
    alignSelf: 'center',
    height: 1,
    borderBottomWidth: 1,
    borderColor: '#efefef',
  },
});
