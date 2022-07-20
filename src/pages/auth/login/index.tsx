import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  Alert,
  ActivityIndicator,
  TouchableHighlight,
  TouchableWithoutFeedback,
  Image,
  Keyboard,
} from 'react-native';
import styles from './styles';
import AppStatusBar from '../../../components/AppStatusBar';
import { TextInput } from 'react-native-gesture-handler';
import { useAuth } from '../../../contexts/auth';
import images from '../../images';

export default function Login() {
  const [matricula, setMatricula] = useState('');
  const [senha, setSenha] = useState('');
  const { signIn, loading } = useAuth();

  async function handleLogar() {
    if (matricula == '' || senha == '') {
      Alert.alert('Vazio', 'Insira as credências por favor.');
      return;
    }
    await signIn(matricula, senha);
  }

  if (loading) {
    return (
      <View style={[styles.container, { justifyContent: 'center' }]}>
        <View style={styles.indicator}>
          <ActivityIndicator color={'#ffffff'} size={'large'} />
        </View>
      </View>
    );
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <AppStatusBar></AppStatusBar>
        <ScrollView contentContainerStyle={styles.body}>
          <View style={styles.card}>
            <View style={styles.flexRow}>
              <Image style={styles.logoImg} source={images.logoIf}></Image>
              <Text style={styles.textTitle}>{`BIBLIOTECA
	  IFMT`}</Text>
            </View>
            <View style={styles.inputContainer}>
              <View style={styles.fieldInput}>
                <Text style={styles.footerText}>Nº de matrícula</Text>
                <TextInput
                  keyboardType="numeric"
                  autoCapitalize="none"
                  style={styles.textInput}
                  onChangeText={(inputMatricula) =>
                    setMatricula(inputMatricula)
                  }
                  maxLength={15}
                ></TextInput>
              </View>
              <View style={styles.fieldInput}>
                <Text style={styles.footerText}>Senha</Text>
                <TextInput
                  secureTextEntry={true}
                  onChangeText={(inputSenha) => setSenha(inputSenha)}
                  autoCapitalize="none"
                  style={styles.textInput}
                  maxLength={20}
                ></TextInput>
              </View>
              <TouchableHighlight
                style={styles.loginButton}
                onPress={handleLogar}
              >
                <Text style={styles.loginButtonText}>ENTRAR</Text>
              </TouchableHighlight>
            </View>
          </View>
        </ScrollView>
        <View style={styles.footer}>
          <Text style={styles.footerText}>Problemas em logar?</Text>
          <Text style={styles.footerText}>Entre em contato com o IFMT</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
