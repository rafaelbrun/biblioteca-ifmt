import { StyleSheet } from 'react-native';
import { lightBlue, gray, skyBlue, darkBlue } from '../../geral/styles';

export default StyleSheet.create({
  indicator: {
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 60,
  },
  container: {
    flex: 1,
    backgroundColor: lightBlue,
  },
  body: {
    flex: 1,
    alignItems: 'center',
    padding: 4,
  },
  card: {
    width: '85%',
    padding: 10,
    marginTop: 40,
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    borderRadius: 6,
  },
  flexRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoImg: {
    resizeMode: 'contain',
    width: 100,
    height: 100,
  },
  textTitle: {
    fontSize: 22,
    letterSpacing: 1,
    color: gray,
    fontWeight: '600',
    marginLeft: 24,
  },
  inputContainer: {
    paddingTop: 24,
    width: '90%',
    paddingHorizontal: 12,
    marginHorizontal: 24,
  },
  fieldInput: {
    marginBottom: 20,
  },
  textInput: {
    borderRadius: 2,
    backgroundColor: lightBlue,
    fontSize: 20,
    marginTop: 6,
    padding: 8,
  },
  loginButton: {
    alignSelf: 'center',
    borderRadius: 20,
    marginVertical: 20,
    padding: 12,
    width: 150,
    alignItems: 'center',
    backgroundColor: darkBlue,
  },
  loginButtonText: {
    color: '#fff',
    letterSpacing: 2,
    fontSize: 16,
    fontWeight: '600',
  },
  footer: {
    height: 60,
    alignItems: 'center',
  },
  footerText: {
    letterSpacing: 1.5,
    color: gray,
  },
});
