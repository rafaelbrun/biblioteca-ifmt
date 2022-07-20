import { StyleSheet } from 'react-native';

import { darkBlue, skyBlue, lightBlue, gray } from 'src/pages/geral/styles';

export default StyleSheet.create({
  button: {
    borderRadius: 20,
    elevation: 2,
    padding: 10,
    width: 130,
  },
  buttonClose: {
    alignSelf: 'flex-end',
    borderRadius: 90,
    height: 32,
    justifyContent: 'center',
    width: 32,
  },
  buttonDarkBlue: {
    backgroundColor: darkBlue,
  },
  buttonSkyBlue: {
    backgroundColor: skyBlue,
  },
  buttonsContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  centeredView: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    marginTop: 22,
  },
  container: {
    backgroundColor: lightBlue,
    flex: 1,
  },
  disabledText: {
    color: '#bbb',
  },
  disponibilidadeText: {
    fontSize: 20,
    fontWeight: '600',
    marginLeft: 4,
  },
  errorMessage: {
    fontSize: 16,
    letterSpacing: 1,
  },
  errorMessageContainer: {
    alignItems: 'center',
    display: 'flex',
    margin: 32,
  },
  exemplarTitulo: {
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: 2,
    textTransform: 'uppercase',
  },
  fullWidth: {
    width: '70%',
  },
  inputContainer: {
    padding: 24,
  },
  inputField: {
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 18,
    display: 'flex',
    flexDirection: 'row',
  },
  itemContainer: {
    display: 'flex',
    padding: 18,
    paddingHorizontal: 24,
  },
  listContainer: {
    alignSelf: 'center',
    backgroundColor: '#fff',
    height: '80%',
    marginHorizontal: 24,
  },
  loaderContainer: {
    marginTop: 24,
  },
  marginBottom: {
    alignSelf: 'center',
    marginBottom: 32,
  },
  marginInput: {
    paddingHorizontal: 6,
    paddingVertical: 12,
  },
  modalText: {
    flex: 1,
    flexWrap: 'wrap',
    fontSize: 16,
    letterSpacing: 1,
  },
  modalTextTitle: {
    color: gray,
    fontSize: 12,
    letterSpacing: 1.5,
  },
  modalView: {
    backgroundColor: lightBlue,
    borderRadius: 20,
    elevation: 5,
    height: '60%',
    justifyContent: 'space-between',
    margin: 20,
    padding: 8,
    shadowColor: '#000',
    shadowOffset: {
      height: 2,
      width: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    width: '75%',
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 18,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
