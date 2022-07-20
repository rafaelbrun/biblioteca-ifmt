import { StyleSheet } from 'react-native';

import { lightBlue, gray, darkBlue } from 'src/pages/geral/styles';

export default StyleSheet.create({
  body: {
    alignItems: 'center',
    flex: 1,
    padding: 4,
  },
  card: {
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 6,
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: 40,
    padding: 10,
    width: '85%',
  },
  container: {
    backgroundColor: lightBlue,
    flex: 1,
  },
  fieldInput: {
    marginBottom: 20,
  },
  flexRow: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
  },
  footer: {
    alignItems: 'center',
    height: 60,
  },
  footerText: {
    color: gray,
    letterSpacing: 1.5,
  },
  indicator: {
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 60,
  },
  inputContainer: {
    marginHorizontal: 24,
    paddingHorizontal: 12,
    paddingTop: 24,
    width: '90%',
  },
  loginButton: {
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: darkBlue,
    borderRadius: 20,
    marginVertical: 20,
    padding: 12,
    width: 150,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    letterSpacing: 2,
  },
  logoImg: {
    height: 100,
    resizeMode: 'contain',
    width: 100,
  },
  textInput: {
    backgroundColor: lightBlue,
    borderRadius: 2,
    fontSize: 20,
    marginTop: 6,
    padding: 8,
  },
  textTitle: {
    color: gray,
    fontSize: 22,
    fontWeight: '600',
    letterSpacing: 1,
    marginLeft: 24,
  },
});
