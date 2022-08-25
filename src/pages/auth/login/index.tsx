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

import { TextInput } from 'react-native-gesture-handler';

import AppStatusBar from 'src/components/AppStatusBar';
import { useAuth } from 'src/contexts/auth';
import images from 'src/pages/images';

import styles from './styles';

const Login: React.FC = () => {
  const [matricula, setMatricula] = useState('');
  const [senha, setSenha] = useState('');
  const { signIn, loading } = useAuth();

  const handleLogar = async (): Promise<void> => {
    if (matricula === '' || senha === '') {
      Alert.alert('Vazio', 'Insira as credências por favor.');
      return;
    }
    await signIn(matricula, senha);
  };

  if (loading) {
    return (
      // eslint-disable-next-line react-native/no-inline-styles
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
        <AppStatusBar />
        <ScrollView contentContainerStyle={styles.body}>
          <View style={styles.card}>
            <View style={styles.flexRow}>
              <Image source={images.logoIf} style={styles.logoImg} />
              <View style={{ alignItems: 'center' }}>
                <Text style={styles.textTitle}>{'BIBLIOTECA'}</Text>
                <Text style={styles.textTitle}>{'IFMT'}</Text>
              </View>
            </View>
            <View style={styles.inputContainer}>
              <View style={styles.fieldInput}>
                <Text style={styles.footerText}>{'Nº de matrícula'}</Text>
                <TextInput
                  autoCapitalize={'none'}
                  keyboardType={'numeric'}
                  maxLength={15}
                  style={styles.textInput}
                  onChangeText={(inputMatricula) =>
                    setMatricula(inputMatricula)
                  }
                />
              </View>
              <View style={styles.fieldInput}>
                <Text style={styles.footerText}>{'Senha'}</Text>
                <TextInput
                  autoCapitalize={'none'}
                  maxLength={20}
                  secureTextEntry={true}
                  style={styles.textInput}
                  onChangeText={(inputSenha) => setSenha(inputSenha)}
                />
              </View>
              <TouchableHighlight
                style={styles.loginButton}
                onPress={handleLogar}
              >
                <Text style={styles.loginButtonText}>{'ENTRAR'}</Text>
              </TouchableHighlight>
            </View>
          </View>
        </ScrollView>
        <View style={styles.footer}>
          <Text style={styles.footerText}>{'Problemas em logar?'}</Text>
          <Text style={styles.footerText}>{'Entre em contato com o IFMT'}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Login;
