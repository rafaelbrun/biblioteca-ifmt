import { StyleSheet } from 'react-native';

import { lightBlue } from 'src/pages/geral/styles';

export default StyleSheet.create({
  autorExemplar: {
    color: '#aaa',
    fontSize: 12,
    letterSpacing: 1,
  },
  body: {
    backgroundColor: 'white',
    height: '43%',
    marginBottom: 12,
  },
  container: {
    backgroundColor: lightBlue,
    flex: 1,
  },
  dataNotificao: {
    color: '#aaa',
    fontSize: 12,
    letterSpacing: 1,
  },
  divisor: {
    alignSelf: 'center',
    borderBottomWidth: 1,
    borderColor: '#efefef',
    height: 1,
    width: '95%',
  },
  exemplarContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '90%',
  },
  itemContainer: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 8,
    paddingHorizontal: 12,
  },
  limparText: {
    borderBottomColor: 'red',
    borderBottomWidth: 1,
    color: 'red',
  },
  removeButtonContainer: {
    padding: 4,
  },
  semInteressesText: {
    marginLeft: 24,
    marginTop: 24,
  },
  titleContainer: {
    alignItems: 'center',
    borderBottomColor: '#aaa',
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  titleExemplar: {
    flexWrap: 'wrap',
    fontSize: 16,
    letterSpacing: 0.5,
  },
  titleNotificao: {
    letterSpacing: 0.5,
  },
  titleText: {
    fontSize: 18,
    letterSpacing: 1.5,
  },
});
