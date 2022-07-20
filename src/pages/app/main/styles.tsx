import { StyleSheet } from 'react-native';
import { lightBlue, gray, darkBlue, skyBlue } from '../../geral/styles';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: lightBlue,
  },
  inputContainer: {
    padding: 24,
  },
  inputField: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 18,
    backgroundColor: '#fff',
  },
  marginInput: {
    paddingVertical: 12,
    paddingHorizontal: 6,
  },
  fullWidth: {
    width: '70%',
  },
  listContainer: {
    marginHorizontal: 24,
    alignSelf: 'center',
    backgroundColor: '#fff',
    height: '80%',
  },
  itemContainer: {
    display: 'flex',
    padding: 18,
    paddingHorizontal: 24,
  },
  exemplarTitulo: {
    fontSize: 16,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    letterSpacing: 2,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    width: '75%',
    height: '60%',
    margin: 20,
    backgroundColor: lightBlue,
    justifyContent: 'space-between',
    borderRadius: 20,
    padding: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  marginBottom: {
    marginBottom: 32,
    alignSelf: 'center',
  },
  buttonsContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  button: {
    borderRadius: 20,
    padding: 10,
    width: 130,
    elevation: 2,
  },
  buttonSkyBlue: {
    backgroundColor: skyBlue,
  },
  buttonDarkBlue: {
    backgroundColor: darkBlue,
  },
  buttonClose: {
    width: 32,
    height: 32,
    borderRadius: 90,
    justifyContent: 'center',
    alignSelf: 'flex-end',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 18,
  },
  modalText: {
    fontSize: 16,
    letterSpacing: 1,
    flex: 1,
    flexWrap: 'wrap',
  },
  modalTextTitle: {
    fontSize: 12,
    letterSpacing: 1.5,
    color: gray,
  },
  disponibilidadeText: {
    fontSize: 20,
    marginLeft: 4,
    fontWeight: '600',
  },
  disabledText: {
    color: '#bbb',
  },
  loaderContainer: {
    marginTop: 24,
  },
  errorMessageContainer: {
    display: 'flex',
    margin: 32,
    alignItems: 'center',
  },
  errorMessage: {
    fontSize: 16,
    letterSpacing: 1,
  },
});
